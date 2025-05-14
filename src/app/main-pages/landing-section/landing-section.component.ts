import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-landing-section',
  imports: [CommonModule, TranslateModule],
  templateUrl: './landing-section.component.html',
  styleUrl: './landing-section.component.scss',
})
export class LandingSectionComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  githubImage: string = 'assets/img/Githubgreen.png';
  linkedInImage: string = 'assets/img/Linkedingreen.png';
  mailImage: string = 'assets/img/mail.png';
  changeImage(image: string) {
    if (image == 'github') {
      this.githubImage = 'assets/img/Github.png';
    } else if (image == 'linkedIn') {
      this.linkedInImage = 'assets/img/Linkedin.png';
    } else {
      this.mailImage = 'assets/img/mail.png';
    }
  }

  resetImage(image: string) {
    if (image == 'github') {
      this.githubImage = 'assets/img/Githubgreen.png';
    } else if (image == 'linkedIn') {
      this.linkedInImage = 'assets/img/Linkedingreen.png';
    } else {
      this.mailImage = 'assets/img/mail-green.png';
    }
  }

  scrolltoContact() {
    const element = this.document.getElementById('contactForm');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  scrollTomyWork() {
    const element = this.document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
