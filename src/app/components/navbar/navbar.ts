import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  menuItems = [
    { label: 'Accueil', link: '#hero', icon: '🏠' },
    { label: 'À propos', link: '#about', icon: '👤' },
    { label: 'Compétences', link: '#skills', icon: '💻' },
    { label: 'Projets', link: '#projects', icon: '🚀' },
    { label: 'Contact', link: '#contact', icon: '📫' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  scrollToSection(event: Event, link: string) {
    event.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.closeMobileMenu();
    }
  }
}
