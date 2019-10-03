import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { NewIdeaComponent } from './new-idea/new-idea.component';

export const appRoutes: Routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'main', component: MainPageComponent },
    {path: 'new-idea', component: NewIdeaComponent },
];
