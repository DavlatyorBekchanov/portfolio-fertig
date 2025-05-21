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
  isEnglish: boolean = false;
  isGerman: boolean = true;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('de');
    this.translate.get('header.aboutMe').subscribe((value) => {});
    this.translate.use('de');
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
