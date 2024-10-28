import React, { useEffect, useState, useCallback } from 'react';
import classes from './Pokemon.module.scss';

const Pokemon = ({ pokemon }) => {
    const [pokemonDetails, setPokemonDetails] = useState(null);

    const fetchDetails = useCallback(async () => {
        try {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            setPokemonDetails(data);
        } catch (error) {
            console.error('Failed to fetch Pokémon details', error);
        }
    }, [pokemon.url]);

    useEffect(() => {
        fetchDetails();
    }, [fetchDetails]);


    return (
        <div className={classes.pokemoncard}>
            <h2>{pokemon.name}</h2>
            {pokemonDetails && (
                <img src={pokemonDetails.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
            )}
            <button className={classes.detailsbutton}>Подробнее</button>
        </div>
    );    
};

export default Pokemon;
