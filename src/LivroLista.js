import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';
import { Livro } from './modelo/Livro';
import React, { useState, useEffect } from 'react';

let controleLivro = new ControleLivro();
let controleEditora = new ControleEditora();

function LinhaLivro(props) {
    const { livro, excluir } = props;

    const [nomeEditora, setNomeEditora] = useState('');

    useEffect(() => {
        async function buscarNomeEditora() {
            const nome = await controleEditora.getNomeEditora(livro.codEditora);
            setNomeEditora(nome);
        }

        buscarNomeEditora();
    }, [livro]);

    return (
        <>
            <tr>
                <td>{livro.titulo}</td>
{/* Título do livro */}
                <td>{livro.resumo}</td>
{/* Resumo do livro */}
                <td>{nomeEditora}</td>
{/* Nome da Editora */}
                <td>{livro.autores.map((autor, index) => (
                    <span key={index}>{index === 0 ? String.fromCharCode(9679) : ''} {autor}{index < livro.autores.length - 1 ? ', ' : ''}</span>
            ))}
                </td>
            </tr>
            <tr>
                <td>
                    <button style={{background: 'red', color: 'white'}} onClick={()=>excluir(livro.id)}>Excluir</button>
                </td>
                <td colSpan={"4"}>
                </td>
            </tr>
        </>
    );
}
   
function LivroLista() {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        async function buscarLivros() {
            const LivrosObtidos = await controleLivro.obterLivros();
            setLivros(LivrosObtidos);
            setCarregado(true);
        }

        if (!carregado) {
            buscarLivros();
        }
    }, [carregado]);

    const excluir = async (id) => {
        console.log(`Excluindo o livro com id: ${id}`);
        await controleLivro.excluir(id);
        setCarregado(false);     
    }

    return (
        <main style={{ width: '100%' }}>
            <h1 style={{textAlign:'left'}}>Cátalogo de Livros</h1>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                    <tr style={{backgroundColor: 'gray'}}>
                        <th>Título</th>

                        <th>Resumo</th>

                        <th>Editora</th>

                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map(livro => (
                        <LinhaLivro key={livro.id} livro={livro} excluir={excluir} />
                    ))}
                </tbody>
            </table>
        </main>
    )
       
}


export default LivroLista;
    
