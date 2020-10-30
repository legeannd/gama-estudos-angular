import { Component } from '@angular/core';

@Component({
  selector: 'app-ataque',
  templateUrl: './ataque.component.html',
  styleUrls: ['./ataque.component.css']
})
export class AtaquesComponent{
  valorD20 = 0;

  rodarD20() {
    this.valorD20 = Math.floor(Math.random() * 20 + 1);
  }

}
