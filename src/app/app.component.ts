import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/homeComponents/home/home.component';
import { AboutComponent } from './components/homeComponents/about/about.component';
import { SocialsComponent } from './components/homeComponents/socials/socials.component';
import { RegisterComponent } from './components/homeComponents/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive, HomeComponent, AboutComponent, SocialsComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularDemoProject';
  heading = 'Welcome User'
}
