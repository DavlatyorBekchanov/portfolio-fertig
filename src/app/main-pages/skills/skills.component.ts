import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-skills',
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  skills = [
    { name: 'HTML', icon: 'assets/img/skills/HTML.png' },
    { name: 'CSS', icon: 'assets/img/skills/CSS.png' },
    { name: 'JavaScript', icon: 'assets/img/skills/JavaScript.png' },
    {
      name: 'Material <br> Design',
      icon: 'assets/img/skills/Materialdesign.png',
    },
    { name: 'TyperScript', icon: 'assets/img/skills/TypeScript.png' },
    { name: 'Angular', icon: 'assets/img/skills/Angular.png' },
    { name: 'Firebase', icon: 'assets/img/skills/Firebase.png' },
    { name: 'Git', icon: 'assets/img/skills/Git.png' },
    { name: 'Rest-Api', icon: 'assets/img/skills/Rest-Api.png' },
    { name: 'Scrum', icon: 'assets/img/skills/Scrum.png' },
    { name: 'GrowthMindset', icon: 'assets/img/skills/GrowthMindset.png' },
  ];

  scrollToContact() {
    const element = this.document.getElementById('contactForm');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
