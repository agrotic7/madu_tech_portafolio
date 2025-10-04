import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Portfolio } from '../../services/portfolio';
import { About } from '../../models/portfolio.models';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent implements OnInit, AfterViewInit {
  aboutData: About | null = null;
  private isBrowser: boolean;

  constructor(
    private portfolioService: Portfolio,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.aboutData = this.portfolioService.getAbout();
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      setTimeout(() => {
        this.initAnimations();
        this.initCounters();
      }, 100);
    }
  }

  initAnimations() {
    // Scroll Reveals
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    
    scrollRevealElements.forEach((element, index) => {
      gsap.fromTo(element,
        {
          y: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            once: true
          }
        }
      );
    });

    // Philosophy cards stagger animation
    const cards = document.querySelectorAll('.about-section .glass-card');
    gsap.fromTo(cards,
      {
        x: -50,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 60%',
          once: true
        }
      }
    );
  }

  initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      
      gsap.to(counter, {
        innerHTML: target,
        duration: 2,
        ease: 'power1.inOut',
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: counter,
          start: 'top 80%',
          once: true
        }
      });
    });
  }

  scrollToContact() {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
