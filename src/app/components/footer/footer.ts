import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/Madu_Tech' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/madu-tech' },
    { name: 'Email', icon: '📧', url: 'mailto:gueye.medoune@mit.edu.sn' }
  ];

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
