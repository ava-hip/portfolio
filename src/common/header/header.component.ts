import {Component, HostListener} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  constructor(private router: Router) {
  }


  scroll(el: string) {
    if(document.getElementById(el)) {
      // @ts-ignore
      document.getElementById(el).scrollIntoView({behavior: 'smooth'});
    } else{
      // @ts-ignore
      this.router.navigate(['/home']).then(()=> document.getElementById(el).scrollIntoView({behavior: 'smooth'}) );
    }
  }

  @HostListener('window:scroll') onScroll() {

  }
}
