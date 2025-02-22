import { createRoot } from 'react-dom/client'

function Topo () {
    return (
        <div class="topo">
        <h1>DrivenFlix</h1>
        <div>
            <button>Inserir Nome</button>
            <p>Bem vindo(a), fulani</p>
        </div>
    </div>
    )
}

function Menu () {
    return (
        <div class="menu">
        <ul>
            <li>Home</li>
            <li>Favoritos</li>
            <li>Contatos</li>
        </ul>
    </div>
    )
}

function Conteudo () {
    return (
        <div class="conteudo">
        <ul>
            <li>O Senhor dos aneis: a sociedade do anel</li>
            <li>O Senhor dos aneis: as duas torres</li>
            <li>O Senhor dos aneis: o retorno do rei</li>
        </ul>
    </div>
    )
}

function App() {
    return (
        <div>
            <Topo />
            <div class="row">
                <Menu />
                <Conteudo />
            </div>
        </div>


    )
}


const root = createRoot(document.querySelector('.root'));
root.render(<App />);


