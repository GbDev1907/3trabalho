import { getLeadingCommentRanges } from 'typescript';
import { Editora } from '../modelo/Editora';

let editoras: Editora[] = [
  new Editora(1, 'Alta Books'),
  new Editora(2, 'Pearson'),
  new Editora(3, 'Addison Wesley'),
];

export class ControleEditora {
  getNomeEditora(codEditora: number): string {
    let editora = editoras.filter(e => e.codEditora === codEditora);

    if (editora.length > 0) {
      return editora[0].nome;
    } else {
      return 'Editora não encontrada';
    }
  }  

 


  getEditoras(): Editora[] {
    return editoras;
  }
}



