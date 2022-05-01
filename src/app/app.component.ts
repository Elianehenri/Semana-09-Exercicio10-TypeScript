import { Component, OnInit } from '@angular/core';
import { Aluno, Nota } from 'src/assets/exercicio10';

@Component({
  selector: 'ntf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Aluno implements Nota, OnInit {

  exibir: string = "";

  media:number = 0;
  override passou:boolean = true;
  Nome:string = "";

  constructor(){
    super("",0);
  }

  cadeira: string = "";
  ponto:number = 0;
  aluno!: Aluno ;

  ngOnInit() {
    let aluno1: Aluno = new Aluno("Eliane Henriqueta", 8);
	        let notas: Nota[] = [
	            {
	                cadeira: "Geografia",
	                ponto:8,
	                aluno: aluno1
	            },
	            {
	                cadeira: "Geografia",
	                ponto: 10,
	                aluno: aluno1
	            },
	            {
	                cadeira: "Geografia",
	                ponto: 8,
	                aluno: aluno1
	            },
	            {
	                cadeira: "Geografia",
	                ponto: 8,
	                aluno: aluno1
	            }
	        ]

    let media: number = 0;
    for (let i = 0; i < notas.length; i++){
      media += notas[i].ponto;
    }
    media = media / notas.length;
    aluno1.aprovado(media);
    if(aluno1.passou){
      this.passou =true;
      this.exibir = "Aprovado"
    }else{
      this.passou = false;
      this.exibir = "Reprovado";
    }
    this.Nome = aluno1.getNome();
    this.media = media;
    this.passou = true;

  }
}



