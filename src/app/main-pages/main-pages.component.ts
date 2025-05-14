import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { MyStoryComponent } from './my-story/my-story.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactComponent } from './contact/contact.component';
import { PrivarcyPolicyComponent } from '../privarcy-policy/privarcy-policy.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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
  ],
  templateUrl: './main-pages.component.html',
  styleUrl: './main-pages.component.scss',
  host: {
    class: 'main-pages-wrapper',
  },
})
export class MainPagesComponent {}
