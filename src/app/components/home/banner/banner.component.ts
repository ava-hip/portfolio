import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  standalone: true,
  imports: [
    TranslateModule
  ],
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  ngOnInit(): void {}
}
