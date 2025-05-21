import { Component, inject } from '@angular/core';
import { Renderer2, ElementRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf, HttpClientModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(
    private renderer: Renderer2,
    el: ElementRef,
    private router: Router
  ) {}

  showSuccessMessage: boolean = false;
  privacyAccepted: boolean = false;
  isEmailValid: boolean = true;
  isNameValid: boolean = true;
  isMessageValid: boolean = true;
  isTestMode: boolean = false;

  formData = {
    name: '',
    email: '',
    message: '',
  };

  openPrivacyPolicy() {
    this.router.navigate(['/data-privarcy']);
  }

  onSubmit(form: NgForm) {
    if (form.valid && this.privacyAccepted && !this.isTestMode) {
      emailjs
        .send(
          'service_qx8pttk',
          'template_h0w0uxs',
          {
            name: this.formData.name,
            email: this.formData.email,
            message: this.formData.message,
          },
          'I0hBPwSdxLjcA6nE6'
        )
        .then(
          () => {
            this.showSuccessMessage = true;
            form.resetForm();
            setTimeout(() => {
              this.showSuccessMessage = false;
            }, 3000);
          },
          (error) => {}
        );
    } else if (form.valid && this.isTestMode) {
      form.resetForm();
    }
  }
}
