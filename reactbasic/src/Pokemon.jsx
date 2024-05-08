import './Pokemon.css'

export default function Pokemon()
{
    const PokemonNo = Math.floor(Math.random() * 151) + 1;
    const url = `http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${PokemonNo}.png`
    console.log(url)
    return(
        <div className="pokemon-display">
            <h1>Pokemon #{PokemonNo}</h1>
            <img src={url} alt="" />
        </div>
    )
}