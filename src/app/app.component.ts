import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result = 0;
  fav = [false, false, false];

  gerarD20() {
    this.result = Math.floor(Math.random() * 20);
  }

  favoritar(index) {
    this.fav[index] = !this.fav[index];
  }
}
