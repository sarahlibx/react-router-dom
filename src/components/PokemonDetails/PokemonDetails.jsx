// src/components/PokemonDetails/PokemonDetails.jsx
import { useParams } from "react-router";

const PokemonDetails = (props) => {
    const { pokemonId } = useParams();

    const singlePokemon = props.pokemon.find((poke) => (
        poke._id === Number(pokemonId)
    ));
    console.log('Pokemon object:', singlePokemon);

    if (!singlePokemon) {
        return (
            <main>
                <h2>Pokemon Not Found!</h2>
            </main>
        );
    }
    
    return (
    <>
      <h2>{singlePokemon.name}</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{singlePokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{singlePokemon.height}</dd>
      </dl>
    </>
  );
};

export default PokemonDetails;
