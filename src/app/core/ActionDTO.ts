import { DragonListInfo } from '../pages/home/interfaces/dragonlist.interface';

export class ActionDTO {
  nome: string;
  descricao: string;

  constructor({ name, desc }: DragonListInfo) {
    this.nome = name;
    this.descricao = desc;
  }
}
