import React, {Component} from 'react'
import InputSearchPokemon from './InputSearchPokemon';
import ListPokemon from './ListPokemon';
import InformationPokemon from './InformationPokemon';
import FetchData from "../../helpers/fetch-data";
import API from '../../utils/API';
class PokeDashBoard extends Component{
    constructor(props){
        super(props)
        this.state = {
            pokemons : [],
            value : '',
            isFull : false,
            existDouble : false,
            team : [],
            pokemonState: [],
            currentPokemon:[]
        }
    }

    componentDidMount() {
        this.getKantoPokemon();
    }

    getKantoPokemon = () => {
        FetchData(
            "https://pokeapi.co/api/v2/pokemon/?limit=151"
        ).then(reponse =>{
            const monsters = Object.values(reponse.results);
            const pokemons = [];
            monsters.map(monster => pokemons.push(monster.name));
            this.setState({
                isLoading: false,
                pokemons
            });
        })
        
    }

    selectPokemon = value => {
        const myTeam = this.state.team;
        const pokemonState = this.state.pokemonState;     


        if (myTeam.length >= 6) {
            this.setState({ 
                isFull: true,
                existDouble: false
            });
            return;
        }
        else if (myTeam.includes(value)){
            console.log('doublon');
            this.setState({ 
                existDouble: true
            });
            return;
        }
        else
        FetchData('https://pokeapi.co/api/v2/pokemon/'+value+'').then(reponse=>{
            pokemonState.push({
                key : value,
                state : reponse
            })
            myTeam.push(value);
            this.setState({ 
                team: myTeam,
                existDouble: false,
                pokemonState
            });
        })
        
        
    };


    removethispoke = poke => {
        const myTeam = this.state.team;
        let index = myTeam.indexOf(poke.target.className);
        if (index > -1) {
            myTeam.splice(index, 1);
        };
        this.setState({ team: myTeam });
    };

    editthispoke = poke => {
        const myTeam = this.state.pokemonState;
        let index = myTeam.find(o => o.key === poke.target.className);
        this.setState({ currentPokemon : index });
    };


    saveThisTeam = () => {
        const myTeam = {
             team : Object.assign({}, this.state.team) ,
             email :localStorage.getItem("login")
        }
        
        API.saveTeam(myTeam);
    };


    clearPokemon = () => {
        const emptyTeam = [];
        this.setState({
            team: emptyTeam,
            isFull: false
        });
    };




    onChangeText =event =>{
        this.setState({value : event.target.value })
    }

    render(){
        return(
            <div className ='container'>
                <h1 style={{ textAlign: "center" }}>Pokemon Team Builder</h1>
									<p style={{ textAlign: "center" }}>
										Select from the dropdown, or type here to choose your Pokemon!
									</p>
									{this.state.isFull ? <div className='Error'>Your team is already full!</div> : ""}
									{this.state.existDouble ? <div className='Error'>You already have this pokemon!</div> : ""}


                <InputSearchPokemon pokemons = {this.state.pokemons}
                                    value = {this.state.value}
                                    onChangeText = {this.onChangeText}
                                    selectPokemon = {this.selectPokemon}
                                    />
                <div className ='board'>
                    <ListPokemon    team = {this.state.team} 
                                    removethispoke = {this.removethispoke}
                                    editthispoke = {this.editthispoke}/>
                    <InformationPokemon currentPokemon = {this.state.currentPokemon}/>
                </div>
            </div>
        )
    }
}

export default PokeDashBoard;