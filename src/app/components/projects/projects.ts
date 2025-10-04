import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Portfolio } from '../../services/portfolio';
import { Project } from '../../models/portfolio.models';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects: Project[] = [];
  private isBrowser: boolean;

  constructor(
    private portfolioService: Portfolio,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.projects = this.portfolioService.getProjects();
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      setTimeout(() => {
        this.initAnimations();
      }, 100);
    }
  }

  initAnimations() {
    // Project cards animation
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
      gsap.fromTo(card,
        {
          y: 100,
          opacity: 0,
          rotateX: -20,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: 1,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            once: true
          }
        }
      );
    });

    // Parallax effect on scroll
    projectCards.forEach((card) => {
      gsap.to(card, {
        y: -50,
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    });
  }

  getProjectIcon(index: number): string {
    const icons = ['🎉', '💪', '📊', '🛒'];
    return icons[index] || '🚀';
  }

  scrollToContact() {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
