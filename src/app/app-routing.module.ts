import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '',  component: FrontpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }