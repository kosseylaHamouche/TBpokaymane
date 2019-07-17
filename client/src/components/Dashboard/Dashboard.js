import React from 'react';
import { Button } from "react-bootstrap";
import styled from "styled-components";
import Autocomplete from "react-autocomplete";
import FetchData from "../../helpers/fetch-data";
import TeamList from "./team-list";

import API from '../../utils/API';

const Loading = () => (
    <div>
      <h3>Loading...</h3>
    </div>
  );

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          pokemon: [],
          value: "",
          team: [],
          isFull: false,
          selectPokemon: () => {}
        };
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
          "https://pokeapi.co/api/v2/pokedex/2/"
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
          this.setState({ isFull: true });
          return;
        } else myTeam.push(value);
        console.log("Selected: ", value);
        console.log(myTeam);
        this.setState({ team: myTeam });
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
                {this.state.isFull ? <Error>Your team is already full!</Error> : ""}
                <TeamList title="My Team:" team={this.state.team} />
                <Button warn onClick={this.clearPokemon}>
                  Restart
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
      text-align: center;
      transform: translateY(-16px);
    `;
    