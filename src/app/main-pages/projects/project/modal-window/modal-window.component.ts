import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Projects } from '../../projects.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-modal-window',
  imports: [TranslateModule],
  templateUrl: './modal-window.component.html',
  styleUrl: './modal-window.component.scss',
})
export class ModalWindowComponent {
  @Input() projectData!: Projects | null;

  @Output() dialogClosed = new EventEmitter<boolean>();
  @Output() nextClicked = new EventEmitter<boolean>();

  closeDialog(event: MouseEvent, shouldClose: boolean): void {
    event.stopPropagation();
    this.dialogClosed.emit(shouldClose);
  }

  goToNextProject(): void {
    this.nextClicked.emit();
  }
}
