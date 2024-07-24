import {Component} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'app-skills-bento',
    standalone: true,
  imports: [
    TranslateModule,
    NgOptimizedImage
  ],
    templateUrl: './skills-bento.component.html',
    styleUrl: './skills-bento.component.css'
})
export class SkillsBentoComponent {

}
