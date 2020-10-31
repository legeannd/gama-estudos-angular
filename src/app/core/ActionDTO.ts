import { DragonListInfo } from '../pages/home/home.component';

export class ActionDTO {
  nome: string;
  descricao: string;

  constructor({ name, desc }: DragonListInfo) {
    this.nome = name;
    this.descricao = desc;
  }
}
