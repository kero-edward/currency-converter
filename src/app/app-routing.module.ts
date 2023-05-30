import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertHomeComponent } from './components/convert-home/convert-home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ConvertDetailsComponent } from './components/convert-details/convert-details.component';

const routes: Routes = [
  { path: '', component: ConvertHomeComponent },
  { path: 'home', redirectTo: '' },
  { path: 'details', component: ConvertDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
