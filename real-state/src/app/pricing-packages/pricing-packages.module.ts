import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { PackagesComponent } from './components/packages/packages.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    PackagesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PricingPackagesModule { }
