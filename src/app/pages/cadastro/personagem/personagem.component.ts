import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PersonagemService } from './personagem.service';

@Component({
  selector: 'card-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent {

  @Input() dados;
  @Output() change = new EventEmitter();

  disparar() {
    this.change.emit(this.dados);
  }

}
