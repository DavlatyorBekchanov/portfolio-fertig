import { Component, Renderer2, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedService } from '../../../services/shared.service';
import { LanguageSwitcherComponent } from '../../language-switcher/language-switcher.component';
import { LanguageService } from '../../../../language.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LanguageSwitcherComponent, TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  isMobileMenuOpen: boolean = false;
  scrollPending: boolean = false;

  constructor(
    public sharedService: SharedService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private scroller: ViewportScroller,
    private translate: TranslateService,
    public languageService: LanguageService
  ) {}

  ngAfterViewInit(): void {
    if (this.sharedService.impressum()) {
      setTimeout(() => {
        this.scrollToSection(null);
      }, 100);
    }
  }

  toggleMobileMenu(event: Event): void {
    setTimeout(() => {
      event.preventDefault();
      event.stopPropagation();
      if (this.isMobileMenuOpen) {
        this.renderer.removeStyle(this.document.body, 'overflow');
      } else {
        this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
      }
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }, 10);
  }

  closeMobileMenu(event: Event): void {
    event.stopPropagation();
    this.isMobileMenuOpen = false;
    this.renderer.removeStyle(this.document.body, 'overflow');
  }

  scrollToSection(section: 'aboutMe' | 'skills' | 'projects' | null): void {
    if (section !== null) {
      this.setActiveSection(section);
    }

    let elementId: string | null = null;
    if (this.sharedService.aboutMe()) {
      elementId = 'aboutMe';
    } else if (this.sharedService.skills()) {
      elementId = 'skills';
    } else if (this.sharedService.projects()) {
      elementId = 'projects';
    }

    if (elementId) {
      const element = this.document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  setActiveSection(section: 'aboutMe' | 'skills' | 'projects' | null): void {
    if (section === 'aboutMe') {
      this.sharedService.aboutMe.set(true);
      this.sharedService.skills.set(false);
      this.sharedService.projects.set(false);
    } else if (section === 'skills') {
      this.sharedService.skills.set(true);
      this.sharedService.aboutMe.set(false);
      this.sharedService.projects.set(false);
    } else if (section === 'projects') {
      this.sharedService.projects.set(true);
      this.sharedService.aboutMe.set(false);
      this.sharedService.skills.set(false);
    }
  }
}
