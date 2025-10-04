import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Portfolio } from '../../services/portfolio';
import { Hero } from '../../models/portfolio.models';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('heroSection') heroSection!: ElementRef;
  @ViewChild('heroDesc') heroDesc!: ElementRef;
  @ViewChild('heroButtons') heroButtons!: ElementRef;

  heroData: Hero | null = null;
  private isBrowser: boolean;
  private rotatingInterval: any;
  private mouseX = 0;
  private mouseY = 0;

  constructor(
    private portfolioService: Portfolio,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.heroData = this.portfolioService.getHero();
    
    if (this.isBrowser) {
      this.initStars();
      this.initMouseTracking();
    }
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      setTimeout(() => {
        this.initAnimations();
        this.initMagneticButtons();
        this.initRotatingWords();
      }, 100);
    }
  }

  ngOnDestroy() {
    if (this.rotatingInterval) {
      clearInterval(this.rotatingInterval);
    }
  }

  initStars() {
    const container = document.querySelector('.stars-container');
    if (!container) return;

    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      container.appendChild(star);
    }
  }

  initMouseTracking() {
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
  }

  initAnimations() {
    // Animation des mots du titre avec split
    const words = document.querySelectorAll('.hero-title .word');
    gsap.fromTo(words, 
      { 
        y: 100,
        opacity: 0,
        rotateX: -90
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: 'power4.out'
      }
    );

    // Animation de la description
    gsap.fromTo(this.heroDesc.nativeElement,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: 'power3.out'
      }
    );

    // Animation des boutons
    gsap.fromTo(this.heroButtons.nativeElement,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.3,
        ease: 'power3.out'
      }
    );

    // Animation des social links
    gsap.fromTo('.social-link',
      {
        scale: 0,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 1.6,
        ease: 'back.out(1.7)'
      }
    );

    // Parallaxe au scroll
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.to(this.heroSection.nativeElement, {
        opacity: 0.3,
        y: -100,
        scrollTrigger: {
          trigger: this.heroSection.nativeElement,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
    }
  }

  initMagneticButtons() {
    const buttons = document.querySelectorAll('.magnetic-btn');
    
    buttons.forEach((button) => {
      button.addEventListener('mousemove', (e: any) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(button, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)'
        });
      });
    });
  }

  initRotatingWords() {
    const words = document.querySelectorAll('.rotating-word');
    let currentIndex = 0;

    const showWord = (index: number) => {
      words.forEach((word, i) => {
        gsap.to(word, {
          opacity: i === index ? 1 : 0,
          y: i === index ? 0 : 20,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
    };

    showWord(0);

    this.rotatingInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      showWord(currentIndex);
    }, 3000);
  }

  scrollToProjects() {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToAbout() {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToContact() {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
