import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent {
  @Input() imgSrc!: string;
  @Input() altText!: string;
  @Input() role!: string;
  @Input() period!: string;
  @Input() details!: Array<{ title: string; description: string }>;

  isOpen = false;

  // disponibiliza os ícones no template
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  constructor(library: FaIconLibrary) {
    library.addIcons(faChevronDown, faChevronUp);
  }

  toggleDetails() {
    this.isOpen = !this.isOpen;
  }
}
