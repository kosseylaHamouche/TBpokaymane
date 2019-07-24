import React, {Component} from 'react';

class InformationPokemon extends Component{
    constructor(props){
        super(props);
        this.state = {
            move1:'',
            move2:'',
            move3:'',
            move4:'',
            currentMove :'move1',
            movesList : []
        }
    }

    componentDidMount(){
        this.setState({
            movesList : this.props.movesList
        })
    }
     onchange= event =>{
         console.log(event.target)
         /*this.setState({
            
         })*/
     }

    render(){
        const {currentPokemon,movesList} = this.props;
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
                    
                <div class="col ivcol">
                    <div><strong>IVs</strong></div>
                    <div><input type="number" name="iv-hp" value="31" className="textbox inputform numform" min="0" max="31" step="1"/></div>
                    <div><input type="number" name="iv-atk" value="0" className="textbox inputform numform" min="0" max="31" step="1"/></div>
                    <div><input type="number" name="iv-def" value="31" className="textbox inputform numform" min="0" max="31" step="1"/></div>
                    <div><input type="number" name="iv-spa" value="31" className="textbox inputform numform" min="0" max="31" step="1"/></div>
                    <div><input type="number" name="iv-spd" value="31" className="textbox inputform numform" min="0" max="31" step="1"/></div>
                    <div><input type="number" name="iv-spe" value="31" className="textbox inputform numform" min="0" max="31" step="1"/></div>
                    
                </div>
                <div class="col statscol">
                    <div></div>
                    <div><b>251</b></div>
                    <div><b>105</b></div>
                    <div><b>166</b></div>
                    <div><b>386</b></div>
                    <div><b>246</b></div>
                    <div><b>336</b></div>
                </div>                    
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
                        <option value="Hardy">Hardy</option>
                        <option value="Hasty">Hasty (+Spe, -Def)</option>
                        <option value="Impish">Impish (+Def, -SpA)</option>
                        <option value="Jolly">Jolly (+Spe, -SpA)</option>
                        <option value="Lax">Lax (+Def, -SpD)</option>
                        <option value="Lonely">Lonely (+Atk, -Def)</option>
                        <option value="Mild">Mild (+SpA, -Def)</option>
                        <option value="Modest">Modest (+SpA, -Atk)</option>
                        <option value="Naive">Naive (+Spe, -SpD)</option>
                        <option value="Naughty">Naughty (+Atk, -SpD)</option>
                        <option value="Quiet">Quiet (+SpA, -Spe)</option>
                        <option value="Quirky">Quirky</option>
                        <option value="Rash">Rash (+SpA, -SpD)</option>
                        <option value="Relaxed">Relaxed (+Def, -Spe)</option>
                        <option value="Sassy">Sassy (+SpD, -Spe)</option>
                        <option value="Serious" selected="selected">Serious</option>
                        <option value="Timid">Timid (+Spe, -Atk)</option>
                    </select>
                </p>
                </div>
                <br/>
                <div class="setcol setcol-moves">
                    <div class="setcell">
                        <label>Moves</label>
                        <input type="text" name="move1" onchange={this.onchange} class="textbox chartinput" value={this.state.move1} autocomplete="off"/>
                    </div>
                    <div class="setcell">
                        <input type="text" name="move2" onchange={this.onchange} class="textbox chartinput" value={this.state.move2} autocomplete="off"/>
                    </div>
                    <div class="setcell">
                        <input type="text" name="move3" onchange={this.onchange} class="textbox chartinput" value={this.state.move3} autocomplete="off"/>
                    </div>
                    <div class="setcell">
                        <input type="text" name="move4" onchange={this.onchange} class="textbox chartinput" value={this.state.move4} autocomplete="off"/>
                    </div>
                </div>
                <ul class="utilichart" >
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
                        {movesList.map(move=>(
                            <li class="result">
                            <a data-entry={"move|"+move.name}>
                                <span class="col movenamecol">{move.name}</span> 
                                <span class="col typecol">
                                    <img src={"https://play.pokemonshowdown.com/sprites/types/"+move.type.charAt(0).toUpperCase() + move.type.slice(1)+".png"} alt="Normal" height="14" width="32"/>
                                    <img src={"https://play.pokemonshowdown.com/sprites/categories/"+move.damagetype.charAt(0).toUpperCase() + move.damagetype.slice(1)+".png"} alt="Physical" height="14" width="32"/>
                                </span> 
                                <span class="col labelcol"><em>Power</em><br/>{move.power}</span> 
                                <span class="col widelabelcol"><em>Accuracy</em><br/>{move.accuracy}</span>
                                <span class="col pplabelcol"><em>PP</em><br/>{move.PP}</span> 
                                <span class="col movedesccol"></span>
                             </a>
                        </li>
                        ))

                        }                        
                    </ul>
                </div>
)
    }
}

export default InformationPokemon;