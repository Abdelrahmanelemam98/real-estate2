import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';
import { IgxCarouselModule } from 'igniteui-angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PropertyHomeComponent } from './components/property-home/property-home.component';
import { SearchPropertyComponent } from './components/search-property/search-property.component';
import { WorksSectionComponent } from './components/works-section/works-section.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {SearchFilterComponent} from './components/search-filter/search-filter.component'
import {PropertyComponent} from './components/property/property.component';

import { PropertyService } from '../../services/property.service';
@NgModule({
  declarations: [
    PropertyHomeComponent,
    SearchPropertyComponent,
    WorksSectionComponent,
    AboutUsComponent,
    SearchFilterComponent,
    PropertyComponent
  ],
  imports: [CommonModule, CarouselModule, HammerModule, IgxCarouselModule,FormsModule],
  exports: [PropertyHomeComponent, AboutUsComponent, SearchFilterComponent],
  providers: [PropertyService]
})
export class HomeModule {}
