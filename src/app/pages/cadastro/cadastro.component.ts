import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TitlePageService } from '../../core/title.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent{

  // email = new FormControl('');
  // telefone = new FormControl('');
  formCadastroLogin = new FormGroup({
    nome: new FormControl('', Validators.required),
    classe: new FormControl('', Validators.required),
    raca: new FormControl('', Validators.required),
    telefone: new FormControl('', [
      Validators.required,
      Validators.pattern(/[0-9]{4}-?[0-9]{4}[0-9]?/),
    ]),
    nivel: new FormControl('', Validators.required),
  });

  cadastro = {
    nome: '',
    classe: '',
    telefone: '',
    nivel: '',
    raca: '',
  }

  cardPersonagem;

  constructor(private titlePageService: TitlePageService){
    this.titlePageService.atualizaTitulo('Cadastro')
  }

  acessar() {
    console.log(this.formCadastroLogin.valid)
  }

  salvar(formCadastro: NgForm) {
    if(formCadastro.invalid) {
      formCadastro.control.markAllAsTouched();
    } else {
      this.cardPersonagem = {...this.cadastro}
      localStorage.setItem('formCadastro', JSON.stringify(this.cadastro));
      formCadastro.control.reset();
    }
  }

  editarPersonagem(event) {
    this.cadastro = event;
  }

  selectedSauce(event: boolean) {
    console.log((`o valor do molho é ${event}`));
  }

}
