import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SlickCarouselModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
