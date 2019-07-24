import React, {Component} from 'react';

class InformationPokemon extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {currentPokemon} = this.props;
        console.log(currentPokemon);
        return(<div className="rightcolumn">
            
            <div className="statform">
               <div className="col labelcol">
                   <div>
                    </div>
                    <div>
                        <label>HP</label>
                    </div>
                    <div>
                        <label>Attack</label>
                    </div>
                    <div>
                        <label>Defense</label>
                    </div>
                    <div>
                        <label>Sp. Atk.</label>
                    </div>
                    <div>
                        <label>Sp. Def.</label>
                    </div>
                    <div>
                        <label>Speed</label>
                   </div>
                </div>
                <div className="col basestatscol">
                    <div>
                        <em>Base</em>
                    </div>
                    {currentPokemon.state ? currentPokemon.state.stats.map(stat => (
                        <div key={stat.key}>
                            <b>{stat.base_stat}</b>
                        </div>
                    )).reverse() : <div></div>}
                    {/*<div>
                        <b>55</b>
                    </div>
                    <div>
                        <b>50</b>
                    </div>
                    <div>
                        <b>65</b>
                    </div>
                    <div>
                        <b>175</b>
                    </div>
                    <div>
                        <b>105</b>
                    </div>
                    <div>
                        <b>150</b>
                    </div>*/}
                </div>
                    <div class="col evcol">
                        <div><strong>EVs</strong></div>
                        <div><input type="text" name="stat-hp" value="" className="textbox inputform numform"/></div>
                        <div><input type="text" name="stat-atk" value="" className="textbox inputform numform"/></div>
                        <div><input type="text" name="stat-def" value="" className="textbox inputform numform"/></div>
                        <div><input type="text" name="stat-spa" value="" className="textbox inputform numform"/></div>
                        <div><input type="text" name="stat-spd" value="" className="textbox inputform numform"/></div>
                        <div><input type="text" name="stat-spe" value="" className="textbox inputform numform"/></div>
                        <div class="totalev"><em>508</em> </div>
                    </div>


                    <div class="col evslidercol">
                        <div></div>
                        <input type="range" min="-10" max="10"></input>
                        <div><input type="range" name="evslider-hp" value="0" min="0" max="252" step="4" className="evslider" tabindex="-1" aria-hidden="true"/></div>
                        <div><input type="range" name="evslider-atk" value="0" min="0" max="252" step="4" className="evslider" tabindex="-1" aria-hidden="true"/></div>
                        <div><input type="range" name="evslider-def" value="0" min="0" max="252" step="4" className="evslider" tabindex="-1" aria-hidden="true"/></div>
                        <div><input type="range" name="evslider-spa" value="0" min="0" max="252" step="4" className="evslider" tabindex="-1" aria-hidden="true"/></div>
                        <div><input type="range" name="evslider-spd" value="0" min="0" max="252" step="4" className="evslider" tabindex="-1" aria-hidden="true"/></div>
                        <div><input type="range" name="evslider-spe" value="0" min="0" max="252" step="4" className="evslider" tabindex="-1" aria-hidden="true"/></div>
                    </div>






                    
                    <div class="col ivcol">
                        <div><strong>IVs</strong></div>
                        <div><input type="number" name="iv-hp" value="31" className="textbox inputform numform" min="0" max="31" step="1"/></div>
                        <div><input type="number" name="iv-atk" value="0" className="textbox inputform numform" min="0" max="31" step="1"/></div>
                        <div><input type="number" name="iv-def" value="31" className="textbox inputform numform" min="0" max="31" step="1"/></div>
                        <div><input type="number" name="iv-spa" value="31" className="textbox inputform numform" min="0" max="31" step="1"/></div>
                        <div><input type="number" name="iv-spd" value="31" className="textbox inputform numform" min="0" max="31" step="1"/></div>
                        <div><input type="number" name="iv-spe" value="31" className="textbox inputform numform" min="0" max="31" step="1"/></div>
                        
                    </div>
                    <div class="col statscol"><div></div><div><b>251</b></div><div><b>105</b></div><div><b>166</b></div><div><b>386</b></div><div><b>246</b></div><div><b>336</b></div></div>
                    
                    
                    
                    
                    <p >
                        Nature: 
                        <select className="nature">
                            <option value="Adamant">Adamant (+Atk, -SpA)</option>
                            <option value="Bashful">Bashful</option>
                            <option value="Bold">Bold (+Def, -Atk)</option>
                            <option value="Brave">Brave (+Atk, -Spe)</option>
                            <option value="Calm">Calm (+SpD, -Atk)</option>
                            <option value="Careful">Careful (+SpD, -SpA)</option>
                            <option value="Docile">Docile</option>
                            <option value="Gentle">Gentle (+SpD, -Def)</option>
                            <option value="Hardy">Hardy</option><option value="Hasty">Hasty (+Spe, -Def)</option><option value="Impish">Impish (+Def, -SpA)</option><option value="Jolly">Jolly (+Spe, -SpA)</option><option value="Lax">Lax (+Def, -SpD)</option><option value="Lonely">Lonely (+Atk, -Def)</option><option value="Mild">Mild (+SpA, -Def)</option><option value="Modest">Modest (+SpA, -Atk)</option><option value="Naive">Naive (+Spe, -SpD)</option><option value="Naughty">Naughty (+Atk, -SpD)</option><option value="Quiet">Quiet (+SpA, -Spe)</option><option value="Quirky">Quirky</option><option value="Rash">Rash (+SpA, -SpD)</option><option value="Relaxed">Relaxed (+Def, -Spe)</option><option value="Sassy">Sassy (+SpD, -Spe)</option><option value="Serious" selected="selected">Serious</option><option value="Timid">Timid (+Spe, -Atk)</option>
                            </select>
                    </p>
                </div>
                <br/>
                <div class="setcol setcol-moves">
                    <div class="setcell">
                        <label>Moves</label>
                        <input type="text" name="move1" class="textbox chartinput" value="" autocomplete="off"/>
                    </div>
                    <div class="setcell">
                        <input type="text" name="move1" class="textbox chartinput" value="" autocomplete="off"/>
                    </div>
                    <div class="setcell">
                        <input type="text" name="move1" class="textbox chartinput" value="" autocomplete="off"/>
                    </div>
                    <div class="setcell">
                        <input type="text" name="move1" class="textbox chartinput" value="" autocomplete="off"/>
                    </div>
                </div>
                <ul class="utilichart" style={{height:"4092px"}}>
                        <li class="result">
                            <div class="sortrow">
                                <button class="sortcol movenamesortcol" data-sort="name">Name</button>
                                <button class="sortcol movetypesortcol" data-sort="type">Type</button>
                                <button class="sortcol movetypesortcol" data-sort="category">Cat</button>
                                <button class="sortcol powersortcol" data-sort="power">Pow</button>
                                <button class="sortcol accuracysortcol" data-sort="accuracy">Acc</button>
                                <button class="sortcol ppsortcol" data-sort="pp">PP</button>
                            </div>
                        </li>
                        <li class="result">
                            <h3>Moves</h3>
                        </li>
                        <li class="result">
                            <a data-entry="move|Body Slam">
                                <span class="col movenamecol">Body Slam</span> 
                                <span class="col typecol">
                                    <img src="https://play.pokemonshowdown.com/sprites/types/Normal.png" alt="Normal" height="14" width="32"/>
                                    <img src="https://play.pokemonshowdown.com/sprites/categories/Physical.png" alt="Physical" height="14" width="32"/>
                                </span> 
                                <span class="col labelcol"><em>Power</em><br/>85</span> 
                                <span class="col widelabelcol"><em>Accuracy</em><br/>100%</span>
                                <span class="col pplabelcol"><em>PP</em><br/>24</span> 
                                <span class="col movedesccol">30% chance to paralyze the target.</span>
                             </a>
                        </li>
                    </ul>
                </div>
)
    }
}

export default InformationPokemon;