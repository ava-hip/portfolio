import {Component} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {NgClass} from "@angular/common";
import {ProjectComponent} from "./project/project.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    TranslateModule,
    NgClass,
    ProjectComponent

  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent{

}
