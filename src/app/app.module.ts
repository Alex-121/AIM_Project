import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RatingModule, } from 'ng-starrating';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './Routes';
import { IdeasPageComponent } from './ideas-page/ideas-page.component';
import { from } from 'rxjs';
import { MainPageSortedComponent } from './main-page-sorted/main-page-sorted.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { IdeaFilter } from './main-page/ideas-filter.pipe';
import { FormsModule } from '@angular/forms';
import { IdeaFilter2 } from './main-page-sorted/ideas-filter2.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NewIdeaComponent,
    NavbarComponent,
    IdeasPageComponent,
    MainPageSortedComponent,
    WelcomepageComponent,
    JwPaginationComponent,
    IdeaFilter,
    IdeaFilter2

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    RatingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
