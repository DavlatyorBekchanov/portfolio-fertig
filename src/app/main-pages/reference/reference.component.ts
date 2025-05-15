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
  isAnimating = false;

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
        // Initialize dot colors
        this.updateDotColorByIndex(this.activeIndex);
      });
  }

  moveLeft() {
    if (this.isAnimating) return;

    this.isAnimating = true;
    this.leftClicked = true;
    this.rightClicked = false;
    this.reset = false;

    // Update index with proper looping
    this.activeIndex =
      (this.activeIndex - 1 + this.reviews.length) % this.reviews.length;

    this.updateDotColorByIndex(this.activeIndex);

    // Reset animation flags after transition
    setTimeout(() => {
      this.leftClicked = false;
      this.rightClicked = false;
      this.isAnimating = false;
    }, 300);
  }

  moveRight() {
    if (this.isAnimating) return;

    this.isAnimating = true;
    this.rightClicked = true;
    this.leftClicked = false;
    this.reset = false;

    // Update index with proper looping
    this.activeIndex = (this.activeIndex + 1) % this.reviews.length;

    this.updateDotColorByIndex(this.activeIndex);

    // Reset animation flags after transition
    setTimeout(() => {
      this.leftClicked = false;
      this.rightClicked = false;
      this.isAnimating = false;
    }, 300);
  }

  selectDot(index: number, dotName: string) {
    if (this.isAnimating || index === this.activeIndex) return;

    this.isAnimating = true;
    const previousIndex = this.activeIndex;
    this.activeIndex = index;

    if (index < previousIndex) {
      this.leftClicked = true;
      this.rightClicked = false;
    } else {
      this.rightClicked = true;
      this.leftClicked = false;
    }

    this.updateDotColorByIndex(index);

    // Reset animation flags after transition
    setTimeout(() => {
      this.leftClicked = false;
      this.rightClicked = false;
      this.isAnimating = false;
    }, 300);
  }

  updateDotColorByIndex(index: number) {
    this.clearDotColors();
    const dotRefs = [this.dotLeft, this.dotMiddle, this.dotRight];
    const selectedDot = dotRefs[index];

    if (selectedDot) {
      this.renderer.setStyle(
        selectedDot.nativeElement,
        'background-color',
        '#3dcfb6'
      );
    }
  }

  clearDotColors() {
    const allDots = this.el.nativeElement.querySelectorAll('.dot');
    allDots.forEach((dot: HTMLElement) => {
      this.renderer.setStyle(dot, 'background-color', '#ffffff');
    });
  }
}
