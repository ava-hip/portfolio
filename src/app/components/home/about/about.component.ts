import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {SkillsBentoComponent} from "./skills-bento/skills-bento.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [
    TranslateModule,
    SkillsBentoComponent,
  ],
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
