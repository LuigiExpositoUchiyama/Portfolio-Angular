import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faDatabase,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faWordpress,
  faPython,
  faJava,
  faDocker,
  faGithub,
  faMicrosoft,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Language {
  name: string;
  icon: IconDefinition;
  color: string;
}

interface Education {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
  languagesTitle: string;
  languages: Language[];
}

@Component({
  selector: 'app-educations',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css'],
})
export class EducationsComponent {
  // Declaração das propriedades para o template
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  openIndexes: number[] = [];

  educationData: Education[] = [
    {
      imgSrc: 'icons/Fiap.png',
      altText: 'FIAP',
      title: 'FIAP',
      description:
        'Sou formado em Análise e Desenvolvimento de Sistemas pela FIAP, uma jornada que foi fundamental para ampliar minha visão sobre os detalhes tecnológicos e práticas do setor. Durante esse processo, adquiri conhecimentos profundos sobre desenvolvimento de sistemas, arquitetura de software e novas tecnologias, o que contribuiu significativamente para o meu aprimoramento técnico e profissional. Essa formação me permitiu compreender melhor os desafios da área e me capacitou para atuar de forma estratégica e eficiente no desenvolvimento de soluções tecnológicas inovadoras.',
      languagesTitle: 'Stack de Desenvolvimento',
      languages: [
        { name: 'HTML',        icon: faHtml5,    color: '#e34f26' },
        { name: 'CSS',         icon: faCss3Alt,  color: '#1572b6' },
        { name: 'JavaScript',  icon: faJsSquare, color: '#f7df1e' },
        { name: 'React',       icon: faReact,    color: '#61dafb' },
        { name: 'Python',      icon: faPython,   color: '#306998' },
        { name: 'React Native',icon: faReact,    color: '#61dafb' },
        { name: 'Java',        icon: faJava,     color: '#007396' },
        { name: 'MongoDB',     icon: faDatabase, color: '#4DB33D' },
        { name: 'MariaDB',     icon: faServer,   color: '#003B57' },
        { name: 'Docker',      icon: faDocker,   color: '#2496ED' },
        { name: 'GitHub',      icon: faGithub,   color: '#181717' },
        { name: 'Azure DevOps',icon: faMicrosoft,color: '#0078D4' },
        { name: 'Figma',       icon: faFigma,    color: '#F24E1E' },
      ],
    },
    {
      imgSrc: 'icons/Curso.png',
      altText: 'Origamid',
      title: 'Origamid',
      description:
        'Foi no curso da Origamid que tive meu primeiro contato com o universo Front-End, o que despertou uma verdadeira paixão pela programação. Ao longo dessa jornada, pude explorar diversas tecnologias e conceitos, o que solidificou meu interesse por essa área tão dinâmica. Além disso, completei com sucesso os diversos cursos oferecidos, conquistando certificados que comprovam minha dedicação e evolução constante no aprendizado de novas ferramentas e práticas do desenvolvimento Front-End.',
      languagesTitle: 'Stack de Desenvolvimento',
      languages: [
        { name: 'HTML',       icon: faHtml5,    color: '#e34f26' },
        { name: 'CSS',        icon: faCss3Alt,  color: '#1572b6' },
        { name: 'JavaScript', icon: faJsSquare, color: '#f7df1e' },
        { name: 'React',      icon: faReact,    color: '#61dafb' },
        { name: 'WordPress',  icon: faWordpress,color: '#21759b' },
      ],
    },
  ];

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faChevronDown,
      faChevronUp,
      faHtml5,
      faCss3Alt,
      faJsSquare,
      faReact,
      faWordpress,
      faPython,
      faJava,
      faDatabase,
      faServer,
      faDocker,
      faGithub,
      faMicrosoft,
      faFigma
    );
  }

  toggleDetails(index: number) {
    const pos = this.openIndexes.indexOf(index);
    if (pos > -1) {
      this.openIndexes.splice(pos, 1);
    } else {
      this.openIndexes.push(index);
    }
  }
}
