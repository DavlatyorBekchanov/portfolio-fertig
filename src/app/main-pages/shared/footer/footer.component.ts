import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  constructor(private router: Router) {}

  openPrivacyPolicy() {
    this.router.navigate(['/privarcy-policy']);
  }
}
