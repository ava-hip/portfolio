import {Component, HostListener} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    TranslateModule,
    NgOptimizedImage
  ],
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router ) {}
  scroll(id: string): void {
    if(document.getElementById(id)) {
      document.getElementById(id)!.scrollIntoView({behavior: 'smooth'});
    } else{
      this.router.navigate(['/home']).then(()=> document.getElementById(id)!.scrollIntoView({behavior: 'smooth'}) );
    }
  }
}
