// src/app/components/portfolio-modal/portfolio-modal.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';    // ✅ importe o globo

import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-portfolio-modal',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    ButtonComponent
  ],
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.css']
})
export class PortfolioModalComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() description = '';
  @Input() videoSource = '';
  @Input() projectLink = '';
  @Input() repoLink?: string;
  @Output() close = new EventEmitter<void>();

  // atributo que vamos usar no template
  websiteIcon = faGlobe;

  constructor(library: FaIconLibrary) {
    library.addIcons(faGithub, faGlobe);  // ✅ adicione o globo ao library
  }

  onClose() {
    this.close.emit();
  }
}
