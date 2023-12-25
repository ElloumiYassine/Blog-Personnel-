import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NewCompetanceComponent } from './component/new-competance/new-competance.component';
import { ListeCompetanceComponent } from './component/liste-competance/liste-competance.component';
import { ProfileComponent } from './component/profile/profile.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"newCompetance",component:NewCompetanceComponent},
  {path:"listCompetance",component:ListeCompetanceComponent},
  {path:"profile",component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
