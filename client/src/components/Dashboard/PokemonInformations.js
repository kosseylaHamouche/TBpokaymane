import React from 'react'

class PokemonInformations extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pokemon=props.pokemon
        }
    }

    getPokemonDate = () =>{
        FetchData(URL+'/pokemon/'+this.state.name).then(value=>{
            console.log(value);
            this.setState({
                pokemonIformation:value
            })
        })
    }


    async getKantoPokemon() {
        const kantoPokemon = await FetchData(
          "https://pokeapi.co/api/v2/pokedex/1/"
        );
        const monsters = Object.values(kantoPokemon.pokemon_entries);
        const pokemon = [];
        monsters.map(monster => pokemon.push(monster.pokemon_species.name));
          this.setState({
            isLoading: false,
            pokemon
          });
      }

      validerMesChangement = () =>{
          this.props.validerMesChangement(this.state.changement)
      }

    render(){
        const {pokemon,pokemonIformation}=this.state;
        return(
            <div>
                {pokemonIformation&&
                    <div>
                        
                    </div>
                }
                <button onclick={this.validerMesChangement}>

                </button>
            </div>
        )
    };

}

export default PokemonInformations
