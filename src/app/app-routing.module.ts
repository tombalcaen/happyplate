import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FullComponent } from './full/full.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '',  component: FrontpageComponent },
  { path: 'service-overload',  component: FullComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }