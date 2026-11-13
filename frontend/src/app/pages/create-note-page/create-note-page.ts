import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Note } from '../../interfaces/note';
import { NoteService } from '../../services/note-service';

@Component({
  selector: 'app-create-note-page',
  imports: [ReactiveFormsModule],
  templateUrl: './create-note-page.html',
  styleUrl: './create-note-page.css',
})
export class CreateNotePage {

  private noteService = inject(NoteService);

  noteCreated = signal(false);

  noteForm = new FormGroup({
    title: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    body: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
  });

  onSubmit(): void {
    if (this.noteForm.valid){
      this.saveNoteData(this.noteForm.getRawValue());
      this.noteForm.reset();

      this.noteCreated.set(true);
      setTimeout(() => this.noteCreated.set(false), 3000);

    } else {
      this.noteForm.markAllAsTouched();
    }
  };

  saveNoteData(data: Note): void {
    this.noteService.addNote(data);
  }
}
