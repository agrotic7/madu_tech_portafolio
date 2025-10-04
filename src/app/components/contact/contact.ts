import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Portfolio } from '../../services/portfolio';
import { Contact } from '../../models/portfolio.models';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent implements OnInit, AfterViewInit {
  contactData: Contact | null = null;
  private isBrowser: boolean;

  constructor(
    private portfolioService: Portfolio,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.contactData = this.portfolioService.getContact();
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      setTimeout(() => {
        this.initAnimations();
      }, 100);
    }
  }

  initAnimations() {
    // Animate contact cards - Ultra rapide
    const cards = document.querySelectorAll('.contact-section .glass-card');
    
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        {
          y: 30,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          delay: index * 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 92%',
            once: true
          }
        }
      );
    });

    // Animate title
    const title = document.querySelector('.contact-section h2');
    if (title) {
      gsap.fromTo(title,
        {
          y: 20,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 90%',
            once: true
          }
        }
      );
    }
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
