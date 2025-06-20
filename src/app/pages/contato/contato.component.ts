// src/app/contato/contato.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitch,
  faGithub,
  faTiktok,
  faLinkedin,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface SocialLink {
  href: string;
  icon: IconDefinition;
  alt: string;
  slug: string;  // "use case" para cada variante
}

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  socialLinks: SocialLink[] = [
    {
      href: 'https://www.twitch.tv/luigi_uchiyama',
      icon: faTwitch,
      alt: 'Twitch',
      slug: 'twitch'
    },
    {
      href: 'https://github.com/LuigiExpositoUchiyama',
      icon: faGithub,
      alt: 'GitHub',
      slug: 'github'
    },
    {
      href: 'https://www.tiktok.com/@luigiuchiyama',
      icon: faTiktok,
      alt: 'TikTok',
      slug: 'tiktok'
    },
    {
      href: 'https://www.linkedin.com/in/luigi-uchiyama/',
      icon: faLinkedin,
      alt: 'LinkedIn',
      slug: 'linkedin'
    },
    {
      href: 'https://mail.google.com/',
      icon: faEnvelope,
      alt: 'Gmail',
      slug: 'gmail'
    },
    {
      href: 'https://www.instagram.com/dev.luigiuchiyama/',
      icon: faInstagram,
      alt: 'Instagram',
      slug: 'instagram'
    },
    {
      href: 'https://wa.me/5511957047874',
      icon: faWhatsapp,
      alt: 'WhatsApp',
      slug: 'whatsapp'
    }
  ];
}
