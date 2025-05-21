import { Component, OnDestroy } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-data-privarcy',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, TranslateModule],
  templateUrl: './data-privarcy.component.html',
  styleUrl: './data-privarcy.component.scss',
})
export class DataPrivarcyComponent implements OnDestroy {
  constructor(
    public sharedService: SharedService,
    private router: Router,
    private location: Location
  ) {
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', this.handleBack);
  }

  ngOnDestroy() {
    window.removeEventListener('popstate', this.handleBack);
  }

  private handleBack = (event: PopStateEvent) => {
    event.preventDefault();
    window.location.href = '/';
  };
}
