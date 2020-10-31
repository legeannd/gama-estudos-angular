import { Component } from '@angular/core';
import { TitlePageService } from '../../core/title.service';

@Component({
  selector: 'app-ataque',
  templateUrl: './ataque.component.html',
  styleUrls: ['./ataque.component.css']
})
export class AtaquesComponent{
  valorD20 = 0;

  constructor(private titlePageService: TitlePageService){
    this.titlePageService.atualizaTitulo('Ataques')
  }

  rodarD20() {
    this.valorD20 = Math.floor(Math.random() * 20 + 1);
  }

}
