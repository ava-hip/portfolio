import {Component} from '@angular/core';
import { initFlowbite } from 'flowbite';
import {HeaderComponent} from "./common/header/header.component";
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "./common/footer/footer.component";
import {animate, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
  ],
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({opacity: 0, scale: 0.7}),
        animate('400ms ease-in', style({opacity:1, scale: 1}))
      ])
    ])
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  ngOnInit(): void {
    initFlowbite();
  }
}
