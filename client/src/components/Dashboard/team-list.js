import React from "react";
import Shortid from "shortid";
import PokeSprite from "react-poke-sprites";
import styled from "styled-components";

export const TeamList = props => (
  <React.Fragment>
    <h3>My Team:</h3>
    {props.team.length < 1 ? <p>You haven't added any Pokemon yet!</p> : ""}
    <OlStyled>
      {props.team.map(member => (
        <li key={Shortid.generate()}>
          <PokeListItem>
            <PokeSpriteStyled pokemon={member} />
            {member}
          </PokeListItem>
        </li>
      ))}
    </OlStyled>
  </React.Fragment>
);

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
  grid-template-columns: 64px auto;
  font-size: 1.25rem;
  font-weight: 700;
  font-style: italic;
  width: 300px;
  background: #ffe56d;
  border: 1px solid #fff2b7;
  border-radius: 5px;
  margin: 0.5rem 0;
  padding: 0.25rem 1rem;
  align-items: center;
  grid-column-gap: 16px;
`;

const PokeSpriteStyled = styled(PokeSprite)`
  max-width: 64px;
  max-height: 56px;
`;

export default TeamList;
