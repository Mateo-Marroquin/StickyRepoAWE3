import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { Note } from '../interfaces/note';
import { readonly } from '@angular/forms/signals';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/notes';
  private _notes: WritableSignal<Note[]> = signal([]);
  notes = this._notes.asReadonly();

  fetchNotes(): void {
    this.http.get<Note[]>(this.apiUrl).subscribe({
      next: (response: Note[]) => {
        this._notes.set(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  };

  addNote(newNote: Note): void {
    this.http.post<Note>(this.apiUrl, newNote).subscribe({
      next: (newNote: Note) => {
        this._notes.update((notes) => [...notes, newNote]);
      },
      error: (error) => {
        console.log('Error al crear la nota');
      },
    });
  };
}
