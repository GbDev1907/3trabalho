import { Livro } from '../modelo/Livro';
import { ControleEditora } from './ControleEditora';

export class ControleLivro {
    private livros: Livro[];

    constructor() {
        this.livros = [];
        this.inicializarLivros();
    }

    inicializarLivros(): void {
        let livros: Livro[] = [
            new Livro(1 , 1, 'Use a Cabeça: Java', 'Uma experiência completa de aprendizado em programação orientada a objetos (oo) e Java.', ['Bert Bates', 'Kathy Sierra'], 'Alta  Books'),
            new Livro(2, 2, 'Java, como Programar', 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros deitel', ['Paul Deitel', 'Harvey Deitel'], 'Pearson'),
            new Livro(3, 3, 'Core Java for the Impatient', 'Um guia condensado para todas as novas funcionalidades e recursos do Java SE 9.', ['Cay Horstmann'], 'Addison Wesley')
        ];

        for(let livro of livros) {
            this.incluir(livro);
        }
    }

    obterLivros(): Livro[] {
        return this.livros;
    }

    incluir(livro: Livro): void {
        let maxCodigo = Math.max(...this.livros.map(l => l.codigo), 0);
        livro.codigo = maxCodigo + 1;
        this.livros.push(livro);
    }

    excluir(codigo: number): void {
        let indice = this.livros.findIndex(livro => livro.codigo === codigo);
        if (indice !== -1) {

            this.livros.splice(indice, 1);
        }
    }
}

let controleEditora = new ControleEditora();
let nomeEditora = controleEditora.getNomeEditora(1);

