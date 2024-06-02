import {Component} from '@angular/core';
import * as projects from "../../../../assets/data/projects.json"

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [

  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent{
  protected readonly projects = projects;
}
