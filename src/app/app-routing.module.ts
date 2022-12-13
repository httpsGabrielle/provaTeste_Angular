import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadUsersComponent } from './cad-users/cad-users.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  { path: 'listar', component: ListUsersComponent },
  { path: 'cadastrar', component: CadUsersComponent },
  { path: '', redirectTo: 'listar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
