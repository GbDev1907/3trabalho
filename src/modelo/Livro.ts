export class Livro {
  codigo: number;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
  nomeEditora: string;

  constructor(
    codigo: number,
    codEditora: number,
    titulo: string,
    resumo: string,
    autores: string[],
    nomeEditora: string

  ) {
    this.codigo = codigo;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
    this.nomeEditora = nomeEditora;
  }
}

let livro = new Livro(1, 1, "Título do Livro", "Resumo do livro", ["Autor1", "Autor2"], "Nome da Editora");
