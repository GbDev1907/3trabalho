import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

function getEditoras() {
    return controleEditora.getEditoras();
};
export function LivroDados() {
    const editoras = getEditoras();

    const opcoes = editoras.map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    })); 

    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(opcoes[0].value);
    
    const navigate = useNavigate();

    const tratarCombo = (evento) => {
        setCodEditora(Number(evento.target.value));
    };

    const incluir = (evento) => {
        evento.preventDefault();

        const livro = {
            codigo: 0,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split('\n'),
            codEditora: codEditora
        };

        controleLivro.incluir(livro);

        navigate('/');
    };

    return (
        <main style={{backgroundColor: '#fff', padding: '20' }}>
            <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Inclusão de Livro</h1>
            <form onSubmit={incluir}>
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Título:
                    <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }} />
                </label>
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Resumo:
                    <textarea value={resumo} onChange={e => setResumo(e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }} />
                </label>
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Autores (separados por linha):
                    <textarea value={autores} onChange={e => setAutores(e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }} />
                </label>
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Editora:
                    <select value={codEditora} onChange={tratarCombo}style={{ width: '100%', padding: '10px', border: '1px solid #ccc'}}>{opcoes.map((opcao, index) => (
                        <option key={index} value={opcao.value}>{opcao.text}</option>
                    ))}
                    </select>
                </label>
                <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Incluir</button>
            </form>
        </main>
    )
}
