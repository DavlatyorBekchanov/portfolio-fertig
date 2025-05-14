import { NgClass, NgIf, NgStyle, DOCUMENT } from '@angular/common';
import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  Renderer2,
  Inject,
} from '@angular/core';
import { Projects } from '../projects.model';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  imports: [NgStyle, NgIf, NgClass, ModalWindowComponent, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @ViewChild('popupContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  @Input() featuredProjects: Projects[] = [];

  selectedProject: Projects | null = null;
  borderColor = '1px solid #3dcfb6';
  selectedIndex: number = -1;
  isModalOpen: boolean = false;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  onProjectHover(project: Projects) {
    project.hover = true;
  }

  onProjectLeave(project: Projects) {
    project.hover = false;
  }

  openProjectModal(index: number) {
    this.selectedIndex = index;
    this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
    this.selectedProject = this.featuredProjects[index];
  }

  closeProjectModal(shouldClose: boolean) {
    if (shouldClose) {
      this.selectedProject = null;
      this.selectedIndex = -1;
      this.renderer.removeStyle(this.document.body, 'overflow');
    }
  }

  showNextProject() {
    if (this.selectedIndex < this.featuredProjects.length - 1) {
      this.selectedIndex++;
      this.selectedProject = this.featuredProjects[this.selectedIndex];
    } else {
      this.selectedProject = this.featuredProjects[0];
      this.selectedIndex = 0;
    }
  }
}
