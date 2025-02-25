export default function Topo () {

    const nome = prompt("Qual é o seu nome?");
    // let frase

    // if (nome === undefined || nome === "") {
    //     frase = "Seja bem vindo(a) ao site!"
    // } else {
    //     frase = `Seja bem vindo(a), ${nome}!`
    // }

    // let frase = !nome ? "Seja bem vindo(a) ao site!" : `Seja bem vindo(a), ${nome}!`



    return (
        <div class="topo">
        <h1>DrivenFlix</h1>
        <div>
            <button>Inserir Nome</button>
            <p>{!nome ? "Seja bem vindo(a) ao site!" : `Seja bem vindo(a), ${nome}!`}</p>
            <img src="https://www.driven.com.br/wp-content/uploads/2021/06/logo-driven.png" alt="Logo Driven" />
        </div>
    </div>
    )
}