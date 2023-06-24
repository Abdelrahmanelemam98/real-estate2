import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PropertyComponent } from './components/property/property.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
const routes: Routes = [

  // { path: 'property', component: PropertyComponent },
  // { path: '', component: SearchFilterComponent },
  // { path: 'home', component: SearchFilterComponent },
  // { path: 'AboutUS', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
