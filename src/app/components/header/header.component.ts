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

  responsiveMenuVisible: Boolean = false;
  pageYPosition: number = 0;

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
    this.responsiveMenuVisible=false;
  }

  @HostListener('window:scroll', ['getScrollPosition($event)'])
  getScrollPosition(event: number) {
    this.pageYPosition=window.pageYOffset
  }
}
