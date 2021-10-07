
import React, { FC, useRef, useState} from 'react'
import User from '../interfaces/User.interface';

interface SearchState {
   pokemon?: Pokemon
}

interface Pokemon {
      error?: boolean,
      name?: string,
      numberOfAbilites?: number,
      baseExperience?: number,
      imageUrl?: string
}

type Props = User & SearchState;

const PokemonSearch: FC<Props> = () => {
    
        const pokemonRef =  useRef<HTMLInputElement>(null);
      //   const [p_name, setP_Name] = useState('');
      //   const [numberOfAbilites, setNuberOfA] = useState(null);
      //   const [baseExperience, setBaseExperience] = useState(null);
      //   const [imageUrl, setImageUrl] = useState('');
      
        const [error, setError] = useState(true);
        const [pokemon, setPokemon] = useState({
              pokemon: {
                    name: '',
                    numberOfAbilites: null,
                    baseExperience: null,
                    imageUrl: ''
              }
        });
        

 








      // type InputEvent = React.ChangeEvent<HTMLInputElement>;
      type KeydownEvent = React.KeyboardEvent<HTMLInputElement>;

      const onSearchClick = (): void => {
            // console.log('here is pokemonRef:', pokemonRef.current.value)
             const inputValue = pokemonRef.current.value;
            fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
            .then(response => {
                  if(response.status !== 200) {

                        setError(true)
                  }
                  response.json().then((data) => {
                        setError(false)
                         setPokemon({
                               pokemon: {
                                     name: data.name,
                                     numberOfAbilites: data.abilities.length,
                                     baseExperience: data.base_experience,
                                     imageUrl: data.sprites.front_default
                               }
                         })
                  })
            })
          

      }

      const handleEnter = (e:KeydownEvent): void => {
    
             if(e.key == 'Enter') {
                   onSearchClick()
             }
      }
      let resultMarkup;
      const {
           
           pokemon: {
            name,
            numberOfAbilites,
            baseExperience,
            imageUrl
           }
      } = pokemon;
      if(error) {
            resultMarkup = <p> Pokemon not found, Please try again.</p>
      } else {
            resultMarkup = (
                  <div>
                        <img src={imageUrl} alt={'pokemon'} className="pokemon-image" />
                       <p>
                             {name} has {numberOfAbilites} abilities and { baseExperience} base experience points.
                       </p>

                  </div>
            )
      }
      return (
            <div>
                  
                  <input type='text'  ref={pokemonRef} onKeyDown={handleEnter} />
                  <button onClick={onSearchClick} className="my-button"> Search </button>
                  
       
                  {resultMarkup}
            
            </div>
      )
}

export default PokemonSearch;
