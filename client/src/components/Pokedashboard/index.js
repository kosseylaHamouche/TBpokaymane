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
            currentPokemon:[],
            movesList : [],
            finalTeam : []
        }
    }

    componentDidMount() {
        this.getKantoPokemon();
        this.getKantoMoves();
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

    getKantoMoves = () =>{
        
        FetchData(
            "https://pokeapi.co/api/v2/move?offset=0&limit=30"
        ).then(reponse =>{
            const moves = Object.values(reponse.results);
            const movesList=[];
            moves.map(movename =>{
                FetchData(
                    "https://pokeapi.co/api/v2/move/"+movename.name+"/"
                ).then(move =>{
                    if(move )
                    {   
                        movesList.push( {
                            name : move.name,
                            type : move.type.name,
                            power : move.power,
                            PP : move.pp,
                            damagetype : move.damage_class.name,
                            accuracy : move.accuracy
                        })
                    }
                });
            }) 
            this.setState({
                isLoading: false,
                movesList
            });
        });
    }

    selectPokemon = value => {
        const myTeam = this.state.team;
        const finalTeam = this.state.finalTeam
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
            const finalStats = [];
            reponse.stats.map(stat=>(
                finalStats.push({
                    final_stat : stat.base_stat*2+5,
                    stat_name : stat.stat.name
                })
            ))
            reponse.finalStats = finalStats;
            pokemonState.push({
                key : value,
                state : reponse
            })
            myTeam.push(value);
            finalTeam.push({key : value, stats:{}})
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
        const finalTeam = this.state.finalTeam;
        const id = finalTeam.find(id => id.key ===this.state.currentPokemon.key)
        finalTeam.splice(id, 1);
        this.setState({ team: myTeam, finalTeam : finalTeam });
    };

    editthispoke = poke => {
        const myTeam = this.state.pokemonState;
        let index = myTeam.find(o => o.key === poke.target.className);
        this.setState({ currentPokemon : index });
    };

    saveCurrentPokemon = (pokemon) =>{
        const finalTeam = this.state.finalTeam;
        const id = finalTeam.findIndex(id => id.key ===this.state.currentPokemon.key);
        finalTeam[id].stats= pokemon;
        this.setState({
            finalTeam:finalTeam
        })
    }

    saveThisTeam = () => {
        const myTeam = {
             team : Object.assign({}, this.state.finalTeam) ,
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


    disconnect = () => {
        API.logout();
        window.location = "/";
    }



    onChangeText =event =>{
        this.setState({value : event.target.value })
    }

    render(){
        console.log(this.state)
        const pStats = this.state.finalTeam.findIndex(id => id.key ===this.state.currentPokemon.key);
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
                    <InformationPokemon saveCurrentPokemon={this.saveCurrentPokemon} currentPokemon = {this.state.currentPokemon} movesList ={this.state.movesList} pStats = {pStats} />
                </div>
            </div>
        )
    }
}

export default PokeDashBoard;