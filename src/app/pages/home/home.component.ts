// src/app/pages/home/home.component.ts
import { Component }          from '@angular/core';
import { CommonModule }       from '@angular/common';
import { RouterLink }         from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faInstagram,
  faWhatsapp,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import {
  faDownload,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

import { ButtonComponent }       from '../../components/button/button.component';
import { TypingEffectComponent } from '../../components/typing-effect/typing-effect.component';
import { DetalhesComponent }     from '../../components/detalhes/detalhes.component';

interface SocialLink { href: string; icon: any; alt: string; slug: string; }
interface Service     { title: string; iconPath: string; description: string; }
interface Stat        { label: string; value: string; }

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FontAwesomeModule,
    ButtonComponent,
    TypingEffectComponent,
    DetalhesComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  resumeUrl    = 'assets/Currículo - Luigi Uchiyama.pdf';
  downloadIcon = faDownload;

  socialLinks: SocialLink[] = [
    { href: 'https://www.instagram.com/dev.luigiuchiyama/', icon: faInstagram, alt: 'Instagram', slug: 'instagram' },
    { href: 'https://wa.me/11957047874',                     icon: faWhatsapp,  alt: 'WhatsApp',  slug: 'whatsapp'  },
    { href: 'https://github.com/LuigiExpositoUchiyama',       icon: faGithub,    alt: 'GitHub',    slug: 'github'    },
    { href: 'https://www.linkedin.com/in/luigi-uchiyama/',    icon: faLinkedin,  alt: 'LinkedIn',  slug: 'linkedin'  }
  ];

  services: Service[] = [
    {
      title: 'UI / UX Design',
      iconPath: '/img/design.svg',
      description:
        'Criação de interfaces intuitivas, com foco na experiência do usuário e navegação eficiente.'
    },
    {
      title: 'Manutenção de Sites',
      iconPath: '/img/manutencao.svg',
      description:
        'Atualizações, correções de erros, inclusão de novos conteúdos e suporte técnico.'
    },
    {
      title: 'Web Design',
      iconPath: '/img/web.svg',
      description:
        'Design alinhado à identidade visual da sua marca, adaptado a todos os dispositivos.'
    }
  ];

  stats: Stat[] = [
    { label: 'graduação',    value: '+1'  },
    { label: 'experiências', value: '+4'  },
    { label: 'projetos',     value: '+10' },
    { label: 'certificados', value: '+10' },
    { label: 'cursos',       value: '+12' }
  ];

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faInstagram,
      faWhatsapp,
      faGithub,
      faLinkedin,
      faDownload,
      faArrowRight
    );
  }
}
