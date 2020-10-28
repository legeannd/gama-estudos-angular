import { Component } from '@angular/core';

class Personas {
  classe: string;
  descricao: string;
  favoritado?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result = 0;
  inputText = ''
  cadastro = {
    nome: '',
    classe: '',
    telefone: '',
    nivel: '',
    raca: '',
  }

  personas: Array<Personas> = [
    {
        "classe":  "Bárbaro",
        "descricao": "A fierce warrior of primitive background who can enter a battle rage",
    },
    {
        "classe":  "Bardo",
        "descricao": "An inspiring magician whose power echoes the music of creation"
    },
    {
        "classe":  "Paladino",
        "descricao": "A holy warrior bound to a sacred oath"
    },
    {
        "classe":  "Mago",
        "descricao": "A scholarly magic-user capable of manipulating the structures of reality"
    },
    {
        "classe":  "Druída",
        "descricao": "A priest of the Old Faith, wielding the powers of nature and adopting animal forms"
    }
  ]

  getValues(value: string, campo: string){
    this.cadastro[campo] = value;
  }

  gerarD20() {
    this.result = Math.floor(Math.random() * 20);
  }

  getValue(event) {
    this.inputText = event.target.value;
  }

  favoritar(index) {
    this.personas[index].favoritado = !this.personas[index].favoritado;
  }
}
