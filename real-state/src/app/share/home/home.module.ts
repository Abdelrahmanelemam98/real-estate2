import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';
import { IgxCarouselModule } from 'igniteui-angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PropertyHomeComponent } from './components/property-home/property-home.component';
import { SearchPropertyComponent } from './components/search-property/search-property.component';
import { WorksSectionComponent } from './components/works-section/works-section.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {SearchFilterComponent} from './components/search-filter/search-filter.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { ArticleComponent } from './components/article/article.component'

@NgModule({
  declarations: [
    PropertyHomeComponent,
    SearchPropertyComponent,
    WorksSectionComponent,
    AboutUsComponent,
    SearchFilterComponent,
    NewsletterComponent,
    EnquiryComponent,
    ArticleComponent,
  ],
  imports: [CommonModule, CarouselModule, HammerModule,ReactiveFormsModule, IgxCarouselModule,FormsModule],
  exports: [PropertyHomeComponent, AboutUsComponent,
    SearchFilterComponent, NewsletterComponent,
    EnquiryComponent,
    ArticleComponent,],
})
export class HomeModule {}
