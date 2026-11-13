import { Component, inject } from '@angular/core';
import { NoteCard } from '../../components/note-card/note-card';
import { NoteService } from '../../services/note-service';

@Component({
  selector: 'app-board-page',
  imports: [NoteCard],
  templateUrl: './board-page.html',
  styleUrl: './board-page.css',
})
export class BoardPage {
  private noteService = inject(NoteService);
  notes = this.noteService.notes;

  ngOnInit() {
    this.noteService.fetchNotes();
  }
}
