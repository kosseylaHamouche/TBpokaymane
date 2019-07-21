/* Child.js */
import React from "react";
import Shortid from "shortid";
import PokeSprite from "react-poke-sprites";
import styled from "styled-components";

export class PokemonListItem extends React.Component {
  constructor(props) {
    super(props);
    
  }

  removethispoke = (e) => {
    console.log(this);
    this.props.onDeletePoke(e.target.className);
  };

  
  render() {
    return (
        <React.Fragment>
          <h3>My Team:</h3>
          {this.props.team.length < 1 ? <p>You haven't added any Pokemon yet!</p> : ""}
          <OlStyled>
            {this.props.team.map(member => (
              <li key={Shortid.generate()}>
                <PokeListItem>
                  <PokeSpriteStyled pokemon={member} />
                  {member}
                <button className={member} onClick={this.removethispoke}>Delete</button>
                <button>Edit</button>
                </PokeListItem>
              </li>
            ))}
          </OlStyled>
        </React.Fragment>
    );
    
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

const PokeListItem = styled.div`
  display: grid;
  grid-template-columns: 106px 300px auto;
  font-size: 1.25rem;
  font-weight: 700;
  font-style: italic;
  width: 600px;
  background: #ffe56d;
  border: 1px solid #fff2b7;
  border-radius: 5px;
  margin: 0.5rem 0;
  padding: 0.25rem 5rem;
  align-items: center;
  grid-column-gap: 16px;
`;

const PokeSpriteStyled = styled(PokeSprite)`
  max-width: 106px;
  max-height: 128px;
`;

export default PokemonListItem;