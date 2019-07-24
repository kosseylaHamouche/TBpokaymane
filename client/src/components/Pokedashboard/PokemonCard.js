import React from 'react';
import Shortid from "shortid";
import PokeSprite from "react-poke-sprites";
import styled from "styled-components";


const PokemonCard = ({
    member,
    editthispoke,
    removethispoke
})=>(
    <li key={Shortid.generate()}>
        <div className ="PokeListItem">
        <PokeSpriteStyled pokemon={member} />
            {member}
            <button className={member} onClick={removethispoke}>Delete</button>
            <button className={member} onClick={editthispoke}>Edit</button>
        </div>
    </li>
);
const PokeSpriteStyled = styled(PokeSprite)`
  max-width: 106px;
  max-height: 128px;
`;
export default PokemonCard;