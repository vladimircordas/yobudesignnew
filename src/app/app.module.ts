import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './main/about/about.component';
import { MyworkComponent } from './main/mywork/mywork.component';
import { ContactComponent } from './main/contact/contact.component';
import { LogosComponent } from './main/mywork/logos/logos.component';


// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
import { ModalGalleryModule } from 'angular-modal-gallery';
import { twodartComponent } from './main/mywork/twodart/twodart.component';
import { BusicardsComponent } from './main/mywork/busicards/busicards.component'; // <----------------- angular-modal-gallery library import
// **************************************************************************

import { NgxGalleryModule } from 'ngx-gallery';
import { PatternsComponent } from './main/mywork/patterns/patterns.component';
import { BookilluComponent } from './main/mywork/bookillu/bookillu.component';
import { IllustrationsComponent } from './main/mywork/illustrations/illustrations.component';
import { DigpaintComponent } from './main/mywork/digpaint/digpaint.component';
import { ThreedmodComponent } from './main/mywork/threedmod/threedmod.component';
import { SculpturesComponent } from './main/mywork/sculptures/sculptures.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    MainComponent,
    AboutComponent,
    MyworkComponent,
    ContactComponent,
    LogosComponent,
    twodartComponent,
    BusicardsComponent,
    PatternsComponent,
    BookilluComponent,
    IllustrationsComponent,
    DigpaintComponent,
    ThreedmodComponent,
    SculpturesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    ModalGalleryModule.forRoot() // <-------------------------------------------- angular-modal-gallery module import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
