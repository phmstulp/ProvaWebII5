import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LavacarComponent } from './cadastros/lavacar/lavacar.component';

const routes: Routes = [
  {path: 'lavacar', component: LavacarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
