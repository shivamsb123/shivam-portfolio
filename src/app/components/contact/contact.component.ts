import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';

  // Replace these with your actual EmailJS credentials
  private emailjsServiceId = 'service_fivxves'; // Example: 'service_abc123'
  private emailjsTemplateId = 'template_c9z42zg'; // Example: 'template_xyz789'
  private emailjsPublicKey = 'tHL__rBxg9SiwZEiK'; // Example: 'user_abc123xyz'
  private yourEmail = 'shivambaghel869@gmail.com'; // Your email address

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      try {
        const templateParams = {
          from_name: this.contactForm.value.name,
          to_name: 'Shivam Singh',
          from_email: this.contactForm.value.email,
          message: this.contactForm.value.message,
          to_email: this.yourEmail,
          reply_to: this.contactForm.value.email
        };

        const response = await emailjs.send(
          this.emailjsServiceId,
          this.emailjsTemplateId,
          templateParams,
          this.emailjsPublicKey
        );
        console.log("response",response);
        

        if (response.status === 200) {
          this.submitMessage = 'Message sent successfully! I will get back to you soon.';
          this.contactForm.reset();
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        console.error('Error:', error);
        this.submitMessage = 'Failed to send message. Please try again or email me directly.';
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
