import { Component } from '@angular/core';
import {LucideAngularModule} from "lucide-angular";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [
    LucideAngularModule
  ],
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
