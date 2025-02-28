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
  
        // Send the email using EmailJS
        const response = await emailjs.send(
          this.emailjsServiceId,
          this.emailjsTemplateId,
          templateParams,
          this.emailjsPublicKey
        );
        console.log("response", response);
  
        if (response.status === 200) {
          // Email sent successfully
          this.submitMessage = 'Message sent successfully! I will get back to you soon.';
          this.contactForm.reset();
  
          // Generate WhatsApp link with a static phone number
          const phoneNumber = '8435533507'; // Replace with your static WhatsApp number
          const whatsappMessage = `Name: ${templateParams.from_name}\nEmail: ${templateParams.from_email}\nMessage: ${templateParams.message}`;
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
          // Check if the user is on a mobile device
          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
          if (isMobile) {
            // Redirect to WhatsApp on mobile
            window.location.href = whatsappUrl;
          } else {
            // For desktop, try to open WhatsApp Web
            const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;
  
            // Open WhatsApp Web in a new tab
            const newWindow = window.open(whatsappWebUrl, '_blank');
  
            // Check if the new window was successfully opened
            if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
              // If WhatsApp Web cannot be opened, show a QR code for scanning
              this.showWhatsAppQRCode(whatsappMessage, phoneNumber);
            }
          }
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
  
  showWhatsAppQRCode(message: string, phoneNumber: string) {
    // Generate a QR code for the WhatsApp Web URL with the static phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappUrl)}`;
  
    // Create a modal element
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';
  
    // Create the QR code content
    const qrCodeContent = document.createElement('div');
    qrCodeContent.style.backgroundColor = 'white';
    qrCodeContent.style.padding = '20px';
    qrCodeContent.style.borderRadius = '10px';
    qrCodeContent.style.textAlign = 'center';
  
    const qrCodeImage = document.createElement('img');
    qrCodeImage.src = qrCodeUrl;
    qrCodeImage.alt = 'WhatsApp QR Code';
  
    const qrCodeText = document.createElement('p');
    qrCodeText.textContent = 'Scan this QR code with your phone to open WhatsApp.';
    qrCodeText.style.marginTop = '20px';
  
    // Append elements to the modal
    qrCodeContent.appendChild(qrCodeImage);
    qrCodeContent.appendChild(qrCodeText);
    modal.appendChild(qrCodeContent);
  
    // Add the modal to the body
    document.body.appendChild(modal);
  
    // Close the modal when clicked outside
    modal.addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  }

  // async onSubmit() {
  //   if (this.contactForm.valid) {
  //     this.isSubmitting = true;
  //     this.submitMessage = '';

  //     try {
  //       const templateParams = {
  //         from_name: this.contactForm.value.name,
  //         to_name: 'Shivam Singh',
  //         from_email: this.contactForm.value.email,
  //         message: this.contactForm.value.message,
  //         to_email: this.yourEmail,
  //         reply_to: this.contactForm.value.email
  //       };

  //       const response = await emailjs.send(
  //         this.emailjsServiceId,
  //         this.emailjsTemplateId,
  //         templateParams,
  //         this.emailjsPublicKey
  //       );
  //       console.log("response",response);
        

  //       if (response.status === 200) {
  //         this.submitMessage = 'Message sent successfully! I will get back to you soon.';
  //         this.contactForm.reset();
  //       } else {
  //         throw new Error('Failed to send message');
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //       this.submitMessage = 'Failed to send message. Please try again or email me directly.';
  //     } finally {
  //       this.isSubmitting = false;
  //     }
  //   }
  // }
}
