import React from 'react';
import { Button } from "react-bootstrap";
import styled from "styled-components";
import Autocomplete from "react-autocomplete";
import FetchData from "../../helpers/fetch-data";
import PokemonTeamList from "./PokemonTeamList";

import API from '../../utils/API';

const Loading = () => (
    <div>
      <h3>Loading...</h3>
    </div>
  );

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        console.log(this)
        this.state = {
          isLoading: true,
          pokemon: [],
          value: "",
          team: [],
          isFull: false,
          existDouble: false,
          selectPokemon: () => {}
        };
        this.disconnect.bind(this);
        
        /* caveat:
         * if state is not initialized in the constructor,
         * then getting state asynchronously will return null
         */
      }
    
      async componentDidMount() {
        await this.getKantoPokemon();
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
    
      selectPokemon = value => {
        const myTeam = this.state.team;
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
        else myTeam.push(value);
        console.log("Selected: ", value);
        console.log(myTeam);
        this.setState({ 
          team: myTeam,
          existDouble: false
        });
      };

      removethispoke = poke => {
        //this.setState({team:team})
        console.log(poke);
        const myTeam = this.state.team;
        var index = myTeam.indexOf(poke);
 
        if (index > -1) {
          myTeam.splice(index, 1);
        }
        this.setState({ team: myTeam });
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

      disconnect = event => {
        API.logout();
        window.location = "/";
    }
    
      render() {
        return (
          <React.Fragment>
            {this.state.isLoading ? (
              <Loading />
            ) : (
              <Wrapper>
                <h1 style={{ textAlign: "center" }}>Pokemon Team Builder</h1>
                <p style={{ textAlign: "center" }}>
                  Select from the dropdown, or type here to choose your Pokemon!
                </p>
                {this.state.isFull ? <Error>Your team is already full!</Error> : ""}
                {this.state.existDouble ? <Error>You already have this pokemon!</Error> : ""}
                <PokemonSelect>
                  <Autocomplete
                    items={this.state.pokemon.map(item => ({
                      id: item,
                      label: item
                    }))}
                    shouldItemRender={(item, value) =>
                      item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
                    }
                    getItemValue={item => item.label}
                    initialValue=""
                    value={this.state.value}
                    onChange={e => this.setState({ value: e.target.value })}
                    onSelect={this.selectPokemon}
                    renderItem={(item, highlighted) => (
                      <div
                        key={item.id}
                        style={{
                          backgroundColor: highlighted ? "#3e9fe6" : "#fff",
                          color: highlighted ? "#fff" : "#3e9fe6"
                        }}
                      >
                        <li>{item.label}</li>
                      </div>
                    )}
                  />
                </PokemonSelect>
                <PokemonTeamList title="My Team:" team={this.state.team} onDeletePoke={this.removethispoke} />
                <Button  onClick={this.clearPokemon}>
                  Restart
                </Button>
                <Button  onClick={this.saveThisTeam}>
                  Save
                </Button>
                <Button  onClick={this.disconnect}>
                  Logout
                </Button>
              </Wrapper>
            )}
          </React.Fragment>
        );
      }
    }
    
    const Wrapper = styled.div`
      margin: 0 auto;
      max-width: 640px;
    `;
    
    const PokemonSelect = styled.div`
      width: 200px;
      margin: 32px auto 48px;
    
      input {
        border-radius: 3px;
        box-shadow: 0 5px 3px 3px rgba(0, 0, 0, 0.25);
        padding: 12px;
        border: none;
        width: 200px;
      }
    
      li {
        cursor: pointer;
        list-style: none;
        text-transform: capitalize;
        padding: 4px 8px;
      }
    `;
    
    const Error = styled.p`
      color: #ee1c24;
      margin-top: 20px;
      text-align: center;
      transform: translateY(-16px);
    `;
    