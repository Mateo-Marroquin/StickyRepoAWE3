import { Routes } from '@angular/router';
import { BoardPage } from './pages/board-page/board-page';
import { CreateNotePage } from './pages/create-note-page/create-note-page';

export const routes: Routes = [
  {path: '', redirectTo: 'board', pathMatch: 'full'},
  {path: 'board', component: BoardPage},
  {path: 'create-note', component: CreateNotePage}
];
