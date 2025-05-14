import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../language.service';
@Component({
  selector: 'app-language-switcher',
  imports: [NgClass, TranslateModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
})
export class LanguageSwitcherComponent {
  isEnglish: boolean = true;
  isGerman: boolean = false;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');
    this.translate.get('header.aboutMe').subscribe((value) => {});
    this.translate.use('en');
  }

  selectLanguage(language: string): void {
    if (language === 'en') {
      this.isEnglish = true;
      this.isGerman = false;
    } else if (language === 'de') {
      this.isEnglish = false;
      this.isGerman = true;
    }
    this.translate.use(language);
  }
}
