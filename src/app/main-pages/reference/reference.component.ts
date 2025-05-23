import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgClass, NgStyle, NgFor, CommonModule } from '@angular/common';
import { Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [NgClass, NgStyle, NgFor, CommonModule, TranslateModule],
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export class ReferenceComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private translate: TranslateService
  ) {}

  @ViewChild('dotLeft') dotLeft!: ElementRef;
  @ViewChild('dotMiddle') dotMiddle!: ElementRef;
  @ViewChild('dotRight') dotRight!: ElementRef;

  activeIndex = 1;
  leftClicked = false;
  rightClicked = false;
  reset = false;

  reviews: any[] = [];
  ngOnInit() {
    this.translate
      .get([
        'reviews.alice.name',
        'reviews.alice.role',
        'reviews.alice.text',
        'reviews.omer.name',
        'reviews.omer.role',
        'reviews.omer.text',
        'reviews.charlie.name',
        'reviews.charlie.role',
        'reviews.charlie.text',
      ])
      .subscribe((translations) => {
        this.reviews = [
          {
            name: translations['reviews.alice.name'],
            role: translations['reviews.alice.role'],
            text: translations['reviews.alice.text'],
          },
          {
            name: translations['reviews.omer.name'],
            role: translations['reviews.omer.role'],
            text: translations['reviews.omer.text'],
          },
          {
            name: translations['reviews.charlie.name'],
            role: translations['reviews.charlie.role'],
            text: translations['reviews.charlie.text'],
          },
        ];
      });
  }
  moveLeft() {
    if (this.rightClicked) {
      this.rightClicked = false;
      this.reset = true;
      this.updateDotColor('dotMiddle');
    } else if (!this.rightClicked && this.reset) {
      this.reset = false;
      this.leftClicked = true;
      this.updateDotColor('dotLeft');
    } else if (!this.leftClicked && !this.rightClicked && !this.reset) {
      this.leftClicked = true;
      this.updateDotColor('dotLeft');
    }
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }

  moveRight() {
    if (this.leftClicked) {
      this.leftClicked = false;
      this.reset = true;
      this.updateDotColor('dotMiddle');
    } else if (!this.leftClicked && this.reset) {
      this.reset = false;
      this.rightClicked = true;
      this.updateDotColor('dotRight');
    } else if (!this.leftClicked && !this.rightClicked && !this.reset) {
      this.rightClicked = true;
      this.updateDotColor('dotRight');
    }
    if (this.activeIndex < this.reviews.length - 1) {
      this.activeIndex++;
    }
  }

  selectDot(index: number, dotName: string) {
    this.updateDotColor(dotName);
    this.activeIndex = index;
    this.leftClicked = dotName === 'dotLeft';
    this.rightClicked = dotName === 'dotRight';
    this.reset = dotName === 'dotMiddle';
  }

  updateDotColor(dot: string) {
    this.clearDotColors();
    const selectedDot =
      dot === 'dotLeft'
        ? this.dotLeft
        : dot === 'dotMiddle'
        ? this.dotMiddle
        : this.dotRight;
    this.renderer.setStyle(
      selectedDot.nativeElement,
      'background-color',
      '#3dcfb6'
    );
  }

  clearDotColors() {
    const allDots = this.el.nativeElement.querySelectorAll('.dot');
    allDots.forEach((dot: HTMLElement) => {
      this.renderer.setStyle(dot, 'background-color', '#ffffff');
    });
  }
}
