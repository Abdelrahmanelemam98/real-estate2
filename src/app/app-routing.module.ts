import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './share/home/home.module';
import { PropertyComponent } from './share/home/components/property/property.component';
import { SearchFilterComponent } from './share/home/components/search-filter/search-filter.component';
import { AboutUsComponent } from './share/home/components/about-us/about-us.component';

const routes: Routes = [

  { path: 'property', component: PropertyComponent },
  { path: '', component: SearchFilterComponent },
  { path: 'home', component: SearchFilterComponent },
  { path: 'AboutUS', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
