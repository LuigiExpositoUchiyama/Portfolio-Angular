import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChildren,
  QueryList,
  ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioModalComponent } from '../../components/portfolio-modal/portfolio-modal.component';

interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  imageSource: string;
  videoSource: string;
  projectLink: string;
  repoLink?: string;
  category: 'cliente' | 'estudo';
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PortfolioModalComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit, OnDestroy {
  isModalOpen = false;
  selectedProject?: Project;

  projects: Project[] = [
    {
      title: 'Burguer Mania',
      description: 'Site dinâmico com cardápio de hambúrgueres.',
      detailedDescription:
        'Criei o site da Burguer Mania como um projeto pessoal, inspirado em um restaurante fictício. Utilizei React e uma API para fornecer dados dinâmicos sobre os hambúrgueres, oferecendo uma navegação prática e detalhada com descrições, ingredientes e imagens.',
      imageSource: '/img/burguermania.png',
      videoSource: '/video/Burguer Mania.mp4',
      projectLink: 'https://burguermania.vercel.app',
      repoLink: 'https://github.com/LuigiExpositoUchiyama/Burguer-Mania',
      category: 'estudo'
    },
    {
      title: 'Lavagem Aquarius',
      description: 'Plataforma virtual para Lava Rápido.',
      detailedDescription:
        'Apresento o site do Lava-Rápido Aquarius, uma plataforma virtual que oferece uma visão abrangente dos serviços de lavagem disponíveis, assim como sua localização conveniente para os clientes. Este site foi projetado para transmitir qualidade e praticidade, apresentando informações essenciais de forma clara e acessível aos visitantes.',
      imageSource: '/img/lavagemAquarius.png',
      videoSource: '/video/Lavagem Aquarius.mp4',
      projectLink: 'https://lavagemaquarius.com',
      // sem repoLink
      category: 'cliente'
    },
    {
      title: 'Bikcraft 2.0',
      description: 'Projeto avançado com foco em UI.',
      detailedDescription:
        'Desenvolvi meu segundo projeto para a Bikcraft como parte do curso na Origamid, onde apliquei os conhecimentos aprimorados em HTML, CSS e UI design. Busquei oferecer uma experiência visualmente atraente e altamente intuitiva para os visitantes.',
      imageSource: '/img/bikcraft2.png',
      videoSource: '/video/Bikcraft2.0.mp4',
      projectLink: 'https://luigiexpositouchiyama.github.io/Bikcraft-2.0/',
      repoLink: 'https://github.com/LuigiExpositoUchiyama/Bikcraft-2.0',
      category: 'estudo'
    },
    {
      title: 'Haven Tranquility',
      description: 'Sistema de apoio à saúde mental.',
      detailedDescription:
        'Desenvolvido com Next.js, Java e banco de dados, esse sistema foi feito para ajudar pessoas com saúde mental, oferecendo dicas personalizadas com base no perfil do usuário.',
      imageSource: '/img/havenTranquility.png',
      videoSource: '/video/Haven Tranquility.mp4',
      projectLink: 'https://haven-tranquility.vercel.app',
      repoLink: 'https://github.com/LuigiExpositoUchiyama/Haven-Tranquility',
      category: 'estudo'
    },
    {
      title: 'Animais Fantásticos',
      description: 'Projeto interativo com JavaScript.',
      detailedDescription:
        'Site que apresenta informações detalhadas sobre diversos animais. Foi criado como parte do curso da Origamid para aprimorar minhas habilidades com JavaScript.',
      imageSource: '/img/animaisFantasticos.png',
      videoSource: '/video/AnimaisFantasticos.mp4',
      projectLink: 'https://luigiexpositouchiyama.github.io/Animais-Fantasticos/',
      repoLink: 'https://github.com/LuigiExpositoUchiyama/Animais-Fantasticos',
      category: 'estudo'
    },
    {
      title: 'Bikcraft 1.0',
      description: 'Primeiro projeto com HTML e CSS.',
      detailedDescription:
        'Esse foi meu primeiro projeto com HTML e CSS, focando em UI básica e marca fictícia. Marca o início da minha jornada no desenvolvimento web.',
      imageSource: '/img/bikcraft.png',
      videoSource: '/video/Bikcraft1.0.mp4',
      projectLink: 'https://luigiexpositouchiyama.github.io/Bikcraft/',
      repoLink: 'https://github.com/LuigiExpositoUchiyama/Bikcraft',
      category: 'estudo'
    },
    {
      title: 'Wildbeast',
      description: 'Exploração avançada de CSS Grid.',
      detailedDescription:
        'Projeto focado em CSS Grid Layout desenvolvido em um curso da Origamid. Interface moderna e responsiva.',
      imageSource: '/img/wildbeast.png',
      videoSource: '/video/Wildbeast.mp4',
      projectLink: 'https://luigiexpositouchiyama.github.io/WildBeast/',
      repoLink: 'https://github.com/LuigiExpositoUchiyama/WildBeast',
      category: 'estudo'
    },
    {
      title: 'Flexblog',
      description: 'Blog com layout em Flexbox.',
      detailedDescription:
        'Projeto voltado ao domínio do Flexbox, com estrutura de blog moderna e adaptável, feito como parte de um curso da Origamid.',
      imageSource: '/img/flexblog.png',
      videoSource: '/video/Flexblog.mp4',
      projectLink: 'https://luigiexpositouchiyama.github.io/FlexBlog/',
      repoLink: 'https://github.com/LuigiExpositoUchiyama/FlexBlog',
      category: 'estudo'
    }
  ];

  @ViewChildren('portfolioItem', { read: ElementRef })
  items!: QueryList<ElementRef<HTMLDivElement>>;

  private observer!: IntersectionObserver;

  get clientProjects() {
    return this.projects.filter(p => p.category === 'cliente');
  }
  get studyProjects() {
    return this.projects.filter(p => p.category === 'estudo');
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const el = entry.target as HTMLElement;
          entry.isIntersecting
            ? el.classList.add('active')
            : el.classList.remove('active');
        });
      },
      { threshold: 0.3 }
    );
    this.items.forEach(item => this.observer.observe(item.nativeElement));
  }

  ngOnDestroy() {
    this.items.forEach(item =>
      this.observer.unobserve(item.nativeElement)
    );
  }

  openModal(project: Project) {
    this.selectedProject = project;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedProject = undefined;
  }
}
