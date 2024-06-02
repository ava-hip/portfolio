import {Component} from '@angular/core';
import { initFlowbite } from 'flowbite';
import {HeaderComponent} from "./common/header/header.component";
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "./common/footer/footer.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  ngOnInit(): void {
    initFlowbite();
  }
}
