import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  ALoadingComponent } from 'projects/a-loading/src/public-api';
import { ALoadingModule } from 'projects/a-loading/src/lib/a-loading.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
   // ALoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ALoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
