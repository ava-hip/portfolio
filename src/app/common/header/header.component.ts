import {Component} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {NgOptimizedImage} from "@angular/common";
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
  scroll(el: string) {
    if(document.getElementById(el)) {
      // @ts-ignore
      document.getElementById(el).scrollIntoView({behavior: 'smooth'});
    } else{
      // @ts-ignore
      this.router.navigate(['/home']).then(()=> document.getElementById(el).scrollIntoView({behavior: 'smooth'}) );
    }
  }
}
