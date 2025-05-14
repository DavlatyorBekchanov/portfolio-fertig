import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    const defaultLang = 'en';
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang(defaultLang);
    translate.use(defaultLang);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  get currentLanguage(): string {
    return this.translate.currentLang;
  }
}
