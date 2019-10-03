import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RatingModule} from 'ng-starrating';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './Routes';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NewIdeaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    RatingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
