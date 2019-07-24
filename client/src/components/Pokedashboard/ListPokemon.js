import React, {Component} from 'react';
import styled from "styled-components";
import PokemonCard from './PokemonCard';

class ListPokemon extends Component{
    constructor(props){
        super(props)
        this.state={
            team : props.team
        }
    }

    render(){
        const {team} = this.state;
        return(<div className="leftcolumn" >
            <OlStyled>
                {team.map(member=>(
                    <PokemonCard key= {member} member = {member}
                                removethispoke = {this.props.removethispoke}
                                editthispoke = {this.props.editthispoke}/>
                ))
                }
            </OlStyled>
        </div>)
    }
}



const OlStyled = styled.ol`
  margin: 0 0 32px;
  padding: 0 0 0 16px;
  text-align: left;
  text-transform: capitalize;

  li {
    font-size: 1.5rem;
    font-weight: 700;
    font-style: italic;
  }
`;



export default ListPokemon;