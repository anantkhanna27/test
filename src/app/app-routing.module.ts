import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetDetailsComponent } from './get-details/get-details.component';
import { AddDetailsComponent } from './add-details/add-details.component';

const routes: Routes = [
  {path:"GetDetails", component:GetDetailsComponent},
   {path:"AddDetails", component:AddDetailsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const 
RoutingComponent = [GetDetailsComponent,AddDetailsComponent];

