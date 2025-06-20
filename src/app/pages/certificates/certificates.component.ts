import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [NgClass],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit, OnDestroy {
  currentIndexFIAP = 0;
  currentIndexOrigamid = 0;

  fiapAnimationClass = '';
  origamidAnimationClass = '';

  private fiapInterval: any;
  private origamidInterval: any;

  private touchStartX = 0;

  certificatesDataFIAP = [
    { title: 'Responsive Web Development', link: 'https://on.fiap.com.br/...', img: 'certifications/Responsive Web Development.png' },
    { title: 'Formação Social e Sustentabilidade', link: 'https://on.fiap.com.br/...', img: 'certifications/Formação Social e Sustentabilidade.png' }
  ];

  certificatesDataOrigamid = [
    { title: 'CSS Flexbox', link: 'https://www.origamid.com/certificate/75a65166/', img: 'certifications/CSS Flexbox.png' },
    { title: 'CSS Grid Layout', link: 'https://www.origamid.com/certificate/2836fa02/', img: 'certifications/CSS Grid Layout.png' },
    { title: 'HTML e CSS para Iniciantes', link: 'https://www.origamid.com/certificate/ed087fcc/', img: 'certifications/HTML e CSS para Iniciantes.png' },
    { title: 'JavaScript Completo ES6+', link: 'https://www.origamid.com/certificate/6c1774b4/', img: 'certifications/JavaScript Completo.png' },
    { title: 'React Completo', link: 'https://www.origamid.com/certificate/41782cf1/', img: 'certifications/React Completo.png' },
    { title: 'UI Design Avançado', link: 'https://www.origamid.com/certificate/67f4f769/', img: 'certifications/UI Design Avançado.png' },
    { title: 'UI Design para Iniciantes', link: 'https://www.origamid.com/certificate/cc0a74bb/', img: 'certifications/UI Design para Iniciantes.png' },
    { title: 'WordPress Como CMS', link: 'https://www.origamid.com/certificate/c8302b0c/', img: 'certifications/WordPress Como CMS.png' }
  ];

  ngOnInit(): void {
    this.fiapInterval = setInterval(() => this.animateNextSlideFIAP(), 6000);
    this.origamidInterval = setInterval(() => this.animateNextSlideOrigamid(), 8000);
  }

  ngOnDestroy(): void {
    clearInterval(this.fiapInterval);
    clearInterval(this.origamidInterval);
  }

  animateNextSlideFIAP(): void {
    this.fiapAnimationClass = 'slide-out-left';
    setTimeout(() => {
      this.nextSlideFIAP();
      this.fiapAnimationClass = 'slide-in-right';
      setTimeout(() => this.fiapAnimationClass = '', 1000);
    }, 1000);
  }

  animateNextSlideOrigamid(): void {
    this.origamidAnimationClass = 'slide-out-left';
    setTimeout(() => {
      this.nextSlideOrigamid();
      this.origamidAnimationClass = 'slide-in-right';
      setTimeout(() => this.origamidAnimationClass = '', 1200);
    }, 1200);
  }

  nextSlideFIAP(): void {
    this.currentIndexFIAP = (this.currentIndexFIAP + 1) % this.certificatesDataFIAP.length;
  }

  prevSlideFIAP(): void {
    this.fiapAnimationClass = 'slide-out-right';
    setTimeout(() => {
      this.currentIndexFIAP = (this.currentIndexFIAP - 1 + this.certificatesDataFIAP.length) % this.certificatesDataFIAP.length;
      this.fiapAnimationClass = 'slide-in-left';
      setTimeout(() => this.fiapAnimationClass = '', 1000);
    }, 1000);
  }

  nextSlideOrigamid(): void {
    this.currentIndexOrigamid = (this.currentIndexOrigamid + 1) % this.certificatesDataOrigamid.length;
  }

  prevSlideOrigamid(): void {
    this.origamidAnimationClass = 'slide-out-right';
    setTimeout(() => {
      this.currentIndexOrigamid = (this.currentIndexOrigamid - 1 + this.certificatesDataOrigamid.length) % this.certificatesDataOrigamid.length;
      this.origamidAnimationClass = 'slide-in-left';
      setTimeout(() => this.origamidAnimationClass = '', 1200);
    }, 1200);
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchEndFIAP(event: TouchEvent): void {
    const touchEndX = event.changedTouches[0].clientX;
    if (touchEndX < this.touchStartX - 50) this.animateNextSlideFIAP();
    if (touchEndX > this.touchStartX + 50) this.prevSlideFIAP();
  }

  onTouchEndOrigamid(event: TouchEvent): void {
    const touchEndX = event.changedTouches[0].clientX;
    if (touchEndX < this.touchStartX - 50) this.animateNextSlideOrigamid();
    if (touchEndX > this.touchStartX + 50) this.prevSlideOrigamid();
  }
}
