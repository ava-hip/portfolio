import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [
    TranslateModule
  ],
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
