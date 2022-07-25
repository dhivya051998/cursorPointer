import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDivComponent } from './create-div/create-div.component';

const routes: Routes = [
  {path:" ",component:CreateDivComponent},
  {path:"position/:param/:param1",component:CreateDivComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
