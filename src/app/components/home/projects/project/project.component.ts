import {Component, Input} from '@angular/core';
import {LucideAngularModule} from "lucide-angular";

@Component({
  selector: 'app-project',
  standalone: true,
    imports: [
        LucideAngularModule
    ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() project: any;
}
