import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichaComponent } from './ficha/ficha.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: FichaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
