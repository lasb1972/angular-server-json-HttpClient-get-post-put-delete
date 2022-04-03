import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './components/navBar/navBar.component';

const routes: Routes = [
  {path:'navbar',component:NavBarComponent}
];

@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
