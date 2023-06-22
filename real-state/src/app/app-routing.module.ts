import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyHomeComponent } from './share/home/components/property-home/property-home.component';
import { AboutMainComponent } from './about-page/components/about-main/about-main.component';


const routes: Routes = [
  { path: '', component: PropertyHomeComponent, pathMatch: 'full' },
  { path: 'home', component: PropertyHomeComponent },
  { path: 'about', component: AboutMainComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
