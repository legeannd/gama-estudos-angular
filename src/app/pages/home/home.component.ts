import { Component, OnInit } from '@angular/core';
import { ActionDTO } from '../../core/ActionDTO';
import { TitlePageService } from '../../core/title.service';
import { HomeService } from './home.service';
import { Personas } from './interfaces/personas.interface';

export interface DragonActionList {
  actions: Array<DragonListInfo>
}

export interface DragonListInfo{
  favorited: boolean
  desc: string;
  name: string;
}

export interface CEPData {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private titlePageService: TitlePageService,
    private homeService: HomeService,
  ){
    this.titlePageService.atualizaTitulo('Home')
  }
  personas;
  cepData: CEPData;
  search = "";

  ngOnInit() {
    /* this.homeService.getDragonData().subscribe((list: DragonActionList) => {
      this.personas = list.actions.map(action => new ActionDTO(action));
    }); */
  }

  favoritar(index: number) {
    this.personas[index].favoritado = !this.personas[index].favoritado
  }

  pesquisar(value: string) {
    this.search = value;
    if (this.search.length === 8){
      this.homeService.getCEPData(this.search).subscribe((cepData: CEPData) => {
        this.cepData = cepData;
        Object.keys(this.cepData).forEach(key => {
          if(cepData[key] === "") {
            this.cepData[key] = "Não informado";
          }
        });
      });
    }
  }
}
