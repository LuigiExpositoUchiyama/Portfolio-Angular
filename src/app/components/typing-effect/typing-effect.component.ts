import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typing-effect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typing-effect.component.html',
  styleUrls: ['./typing-effect.component.css']
})
export class TypingEffectComponent implements OnInit, OnDestroy {
  texto = 'Eae! Eu sou o Luigi Uchiyama.';
  typingText = '';
  index = 0;
  private typingTimer?: number;

  ngOnInit(): void {
    this.startTyping();
  }

  private startTyping(): void {
    this.typingTimer = window.setInterval(() => {
      if (this.index < this.texto.length) {
        this.typingText += this.texto[this.index++];
      } else {
        clearInterval(this.typingTimer);
        setTimeout(() => {
          this.typingText = '';
          this.index = 0;
          this.startTyping();
        }, 5000);
      }
    }, 75);
  }

  ngOnDestroy(): void {
    if (this.typingTimer) {
      clearInterval(this.typingTimer);
    }
  }
}
