import { Component } from '@angular/core';
import {BannerComponent} from "../banner/banner.component";
import {AboutComponent} from "../about/about.component";
import {ProjectsComponent} from "../projects/projects.component";
import {ContactComponent} from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}