import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Portfolio } from '../../services/portfolio';
import { Skills } from '../../models/portfolio.models';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent implements OnInit, AfterViewInit {
  skillsData: Skills | null = null;
  private isBrowser: boolean;

  constructor(
    private portfolioService: Portfolio,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.skillsData = this.portfolioService.getSkills();
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      setTimeout(() => {
        this.initAnimations();
        this.initSkillBars();
      }, 100);
    }
  }

  initAnimations() {
    // Scroll reveals for skill cards - Plus rapide
    const skillCards = document.querySelectorAll('.skill-card');
    
    gsap.fromTo(skillCards,
      {
        y: 50,
        opacity: 0,
        scale: 0.95
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.skills-section',
          start: 'top 85%',
          once: true
        }
      }
    );
  }

  initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach((bar) => {
      const width = bar.getAttribute('data-width');
      
      gsap.fromTo(bar,
        {
          width: '0%'
        },
        {
          width: `${width}%`,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 90%',
            once: true
          }
        }
      );
    });
  }
}
