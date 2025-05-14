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
import { PrivarcyPolicyComponent } from './privarcy-policy/privarcy-policy.component';
import { Router } from '@angular/router';
import { FooterComponent } from './main-pages/shared/footer/footer.component';
import { HeaderComponent } from './main-pages/shared/header/header.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
