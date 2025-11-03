import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InnerBannerComponent } from "../../../shared/components/inner-banner/inner-banner.component";
import { ContactService } from './contact/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InnerBannerComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false; // loader ke liye ya multiple submit rokne ke liye

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      phone: [''],
      message: ['', Validators.required]
    });
  }

  // easy getter for template error handling
  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched(); // sab fields ko highlight kar dega
      return;
    }

    this.isSubmitting = true;

    this.contactService.sendContactForm(this.contactForm.value)
      .subscribe({
        next: (res: any) => {
          alert(res.message || 'Message sent successfully ✅');
          this.contactForm.reset();
          this.isSubmitting = false;
        },
        error: (err) => {
          console.error('Contact form error:', err);
          alert('Something went wrong while sending message ❌');
          this.isSubmitting = false;
        }
      });
  }
}
