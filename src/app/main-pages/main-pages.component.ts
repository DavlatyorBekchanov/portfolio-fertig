import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { MyStoryComponent } from './my-story/my-story.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactComponent } from './contact/contact.component';
import { PrivarcyPolicyComponent } from './privarcy-policy/privarcy-policy.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DataPrivarcyComponent } from './data-privarcy/data-privarcy.component';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-main-pages',
  imports: [
    HeaderComponent,
    FooterComponent,
    LandingSectionComponent,
    MyStoryComponent,
    SkillsComponent,
    ProjectsComponent,
    ReferenceComponent,
    ContactComponent,
    TranslateModule,
    DataPrivarcyComponent,
    CommonModule,
  ],
  templateUrl: './main-pages.component.html',
  styleUrl: './main-pages.component.scss',
  animations: [
    trigger('scrollAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate(
          '0.8s ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class MainPagesComponent implements OnInit, AfterViewInit {
  @ViewChildren('animateElement') animateElements!: QueryList<ElementRef>;
  private observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    );
  }

  ngOnInit() {
    console.log('Component initialized');
  }

  ngAfterViewInit() {
    console.log('View initialized');
    setTimeout(() => {
      this.animateElements.forEach((element) => {
        this.observer.observe(element.nativeElement);
      });
    }, 500);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
