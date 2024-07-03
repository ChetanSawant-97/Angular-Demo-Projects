import { Routes } from '@angular/router';
import { HomeComponent } from './components/homeComponents/home/home.component';
import { AboutComponent } from './components/homeComponents/about/about.component';
import { SocialsComponent } from './components/homeComponents/socials/socials.component';
import { RegisterComponent } from './components/homeComponents/register/register.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'socials', component: SocialsComponent},
    {path: 'register', component: RegisterComponent},

];
