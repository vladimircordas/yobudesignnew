import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './main/about/about.component';
import { MyworkComponent } from './main/mywork/mywork.component';

import { LogosComponent } from './main/mywork/logos/logos.component';
import { twodartComponent } from './main/mywork/twodart/twodart.component';
import { BusicardsComponent } from './main/mywork/busicards/busicards.component';
import { PatternsComponent } from './main/mywork/patterns/patterns.component';
import { BookilluComponent } from './main/mywork/bookillu/bookillu.component';
import { IllustrationsComponent } from './main/mywork/illustrations/illustrations.component';
import { DigpaintComponent } from './main/mywork/digpaint/digpaint.component';
import { ThreedmodComponent } from './main/mywork/threedmod/threedmod.component';
import { SculpturesComponent } from './main/mywork/sculptures/sculptures.component';


import { ContactComponent } from './main/contact/contact.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full' 
  },
  {
    path: 'intro',
    component: IntroComponent,
    data: { page: 'intro' }
  },
  {
    path: 'main',
    component: MainComponent,
    data: { page: 'main' },
    children: [
    {
      path: 'about',
      component: AboutComponent,
      data: { page: 'about' } 
    },
    {
      path: 'mywork',
      component: MyworkComponent,
      data: { page: 'mywork' },
      children: [
      {path: '', redirectTo: 'logos', pathMatch: 'full'},
        {path: 'logos', component: LogosComponent},
        {path: '2dart', component: twodartComponent},
        {path: 'businesscards', component: BusicardsComponent},
        {path: 'patterns', component: PatternsComponent},
        {path: 'bookillustrations', component: BookilluComponent},
        {path: 'illustrations', component: IllustrationsComponent},
        {path: 'digitalpaintings', component: DigpaintComponent},
        {path: '3dmodeling', component: ThreedmodComponent},
        {path: 'sculptures', component: SculpturesComponent}
      ] 
    },
    {
      path: 'contact',
      component: ContactComponent,
      data: { page: 'contact' } 
    },
    ]}
  ];
  
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
  export class AppRoutingModule {}
