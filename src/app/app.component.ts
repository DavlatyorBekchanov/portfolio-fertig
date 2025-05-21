import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { CommonModule } from '@angular/common';
import {
  TranslateDirective,
  TranslateModule,
  TranslatePipe,
} from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PrivarcyPolicyComponent } from './main-pages/privarcy-policy/privarcy-policy.component';
import { Router } from '@angular/router';
import { FooterComponent } from './main-pages/shared/footer/footer.component';
import { HeaderComponent } from './main-pages/shared/header/header.component';
import { DataPrivarcyComponent } from './main-pages/data-privarcy/data-privarcy.component';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainPagesComponent,
    CommonModule,
    TranslateModule,
    TranslatePipe,
    TranslateDirective,
    HeaderComponent,
    FooterComponent,
    DataPrivarcyComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '0.5s ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('de');
    this.translate.get('header.aboutMe').subscribe((val) => {});
  }
  title = 'portfolio';
}
