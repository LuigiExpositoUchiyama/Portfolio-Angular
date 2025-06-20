import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent
  ],
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent {
  careerSections = [
    {
      title: 'Experiências',
      description: `Já fiz parte do time de algumas empresas e agora gostaria de
        compartilhar minha experiência, cada um proporcionando insights únicos
        e valiosos para o meu crescimento profissional.`,
      icons: [
        '/icons/Teleperformance.png',
        '/icons/ThiagoPessoaJoias.png'
      ],
      route: '/experience'
    },
    {
      title: 'Formações',
      description: `Finalizei o Ensino Médio, especializei-me em Front-End pela Origamid e
        me formei em Análise e Desenvolvimento de Sistemas (ADS) pela FIAP.
        Sigo aprimorando minhas habilidades e aplicando-as em projetos
        inovadores.`,
      icons: [
        '/icons/Fiap.png',
        '/icons/Curso.png'
      ],
      route: '/education'
    },
    {
      title: 'Certificados',
      description: `Durante minha jornada de estudos, conquistei certificados que
        demonstram minha dedicação ao aprendizado, comprovando minha busca
        constante por conhecimento.`,
      icons: [
        '/icons/Fiap.png',
        '/icons/Curso.png'
      ],
      route: '/certificates'
    }
  ];
}
