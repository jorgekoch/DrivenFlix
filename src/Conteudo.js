export default function Conteudo () {
    const filmes = [
        "O Senhor dos aneis: a sociedade do anel",
        "O Senhor dos aneis: as duas torres",
        "O Senhor dos aneis: o retorno do rei",
        "Aves de rapina"
    ]


    return (
        <ul class="conteudo">
            {filmes.map(filme => <li>{filme}</li>)}
        </ul>
    )
}