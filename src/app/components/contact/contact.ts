import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Portfolio } from '../../services/portfolio';
import { Contact } from '../../models/portfolio.models';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent implements OnInit {
  contactData: Contact | null = null;

  constructor(private portfolioService: Portfolio) {}

  ngOnInit() {
    this.contactData = this.portfolioService.getContact();
  }

  openLink(url: string | undefined) {
    if (url) {
      window.open(url, '_blank');
    }
  }

  sendEmail() {
    if (this.contactData?.email) {
      window.location.href = `mailto:${this.contactData.email}`;
    }
  }
}
