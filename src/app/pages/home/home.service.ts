import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { DragonActionList } from './interfaces/dragonlist.interface';

@Injectable()
export class HomeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDragonData() {
    //return this.httpClient.get('http://www.dnd5eapi.co/api/monsters/adult-black-dragon')
    return this.httpClient.get(environment.apiURL)
    .pipe(
      map((response: DragonActionList) => {
        return response.actions;
      }),
      catchError((error) => {
        throw new Error('Algo deu errado');
      })
    )
  }

  getCEPData(cep: string) {

    return this
      .httpClient
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      /* .pipe(
        map((response: any) => {
          console.log(response);
          return null;
        }),
        catchError((error) => {
          console.log(error);
          return error;
        })
      ) */
  }
}
