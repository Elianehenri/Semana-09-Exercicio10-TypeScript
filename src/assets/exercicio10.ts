

export class Aluno {
      private nome: string;
    private matricula: number;
    passou: boolean = false;

    constructor(nome: string, matricula: number){
    this.nome = nome;
    this.matricula = matricula;

}
aprovado(media: number){
    if (media >= 7) {
        this.passou = true;
    } else {
        this.passou = false;
    }
    return this.passou;
}
  

getNome(): string {
    return this.nome;
  }
}


export interface Nota {
    cadeira: string;
    ponto: number;
    aluno: Aluno
}

