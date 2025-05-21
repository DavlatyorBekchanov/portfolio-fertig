import { Component, OnDestroy } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privarcy-policy',
  imports: [HeaderComponent, FooterComponent, CommonModule, TranslateModule],
  templateUrl: './privarcy-policy.component.html',
  styleUrl: './privarcy-policy.component.scss',
  host: {
    class: 'page',
  },
})
export class PrivarcyPolicyComponent implements OnDestroy {
  constructor(public sharedService: SharedService, private router: Router) {
    // Handle browser back button
    window.addEventListener('popstate', this.handleBack);
  }

  ngOnDestroy() {
    window.removeEventListener('popstate', this.handleBack);
    this.sharedService.impressum.set(true);
  }

  private handleBack = (event: PopStateEvent) => {
    event.preventDefault();
    this.router.navigate(['/']);
  };
}
