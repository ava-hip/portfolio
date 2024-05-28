import { Routes } from '@angular/router';
import {HomeComponent} from "../common/components/home/home.component";
import {AboutComponent} from "../common/components/about/about.component";
import {ProjectsComponent} from "../common/components/projects/projects.component";
import {ContactComponent} from "../common/components/contact/contact.component";

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "contact", component: ContactComponent},
];
