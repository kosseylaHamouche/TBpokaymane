import React, {Component} from 'react';

class InformationPokemon extends Component{
    constructor(props){
        super(props);
        this.state = {
            move1:'',
            move2:'',
            move3:'',
            move4:'',
            moveInputId : 1,
            movesList : [],
            hp:'0',
            def:'0',
            spa:'0',
            spd:'0',
            spe:'0',
            atk:'0',
            hpIV:'0',
            defIV:'0',
            spaIV:'0',
            spdIV:'0',
            speIV:'0',
            atkIV:'0',
        }
    }
    componentDidMount(){
        this.setState({
            movesList : this.props.movesList
        })
    }
    
    onClick_move= event =>{
        this.setState({
            moveInputId : event.target.name
        })
     }

    onEVChange = event =>{
        if(event.target.value>251){
            event.target.value = 251
        }
        switch(event.target.name)
        {
            case "stat-hp" : this.setState({hp : event.target.value}); break;
            case "stat-atk" : this.setState({atk : event.target.value}); break;
            case "stat-def" : this.setState({def : event.target.value});  break;
            case "stat-spa" : this.setState({spa : event.target.value});  break;
            case "stat-spd" : this.setState({spd : event.target.value});  break;
            default:  this.setState({spe : event.target.value}); ;
        }
    }


    onIVChange = event =>{
        if(event.target.value>31){
            event.target.value = 31
        }
        switch(event.target.name)
        {
            case "iv-hp" : this.setState({hpIV : event.target.value}); break;
            case "iv-atk" : this.setState({atkIV : event.target.value}); break;
            case "iv-def" : this.setState({defIV : event.target.value});  break;
            case "iv-spa" : this.setState({spaIV : event.target.value});  break;
            case "iv-spd" : this.setState({spdIV : event.target.value});  break;
            default:  this.setState({speIV : event.target.value}); ;
        }
    }

    saveThisPokemon = () =>{
        const pokemon = this.props.currentPokemon;
        const finalStat= {
            stats : {
                hp : parseInt(this.state.hp )+ parseInt(this.state.hpIV) + parseInt(pokemon.state.finalStats[5].final_stat),
                atk : parseInt(this.state.atk) + parseInt(this.state.atkIV) + parseInt(pokemon.state.finalStats[4].final_stat),
                def : parseInt(this.state.def) +parseInt(this.state.defIV )+ parseInt(pokemon.state.finalStats[3].final_stat),
                spa : parseInt(this.state.spa) +parseInt(this.state.spaIV )+ parseInt(pokemon.state.finalStats[2].final_stat),
                spd : parseInt(this.state.spd) +parseInt(this.state.spdIV )+ parseInt(pokemon.state.finalStats[1].final_stat),
                spe : parseInt(this.state.spe) +parseInt(this.state.speIV )+ parseInt(pokemon.state.finalStats[0].final_stat),
            },
            move :{
                move1:this.state.move1,
                move2:this.state.move2,
                move3:this.state.move3,
                move4:this.state.move4,
            }   
        }
        this.props.saveCurrentPokemon(finalStat)
    }

    chooseAttack = event =>{            
        const moveID =this.state.moveInputId;
        switch('move'+moveID)
        {
            case "move1" : this.setState({move1 : event.target.id, moveInputId : moveID+1}); break;
            case "move2" : this.setState({move2 : event.target.id, moveInputId : moveID+1}); break;
            case "move3" : this.setState({move3 : event.target.id, moveInputId : moveID+1});  break;
            default:  this.setState({move4 : event.target.id}); ;
        }
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
                    <div><input type="text" name="stat-hp"  value={this.state.hp}  onChange={this.onEVChange} className="textbox inputform numform"/></div>
                    <div><input type="text" name="stat-atk" value={this.state.atk} onChange={this.onEVChange}  className="textbox inputform numform"/></div>
                    <div><input type="text" name="stat-def" value={this.state.def} onChange={this.onEVChange}  className="textbox inputform numform"/></div>
                    <div><input type="text" name="stat-spa" value={this.state.spa} onChange={this.onEVChange}  className="textbox inputform numform"/></div>
                    <div><input type="text" name="stat-spd" value={this.state.spd} onChange={this.onEVChange}  className="textbox inputform numform"/></div>
                    <div><input type="text" name="stat-spe" value={this.state.spe} onChange={this.onEVChange}  className="textbox inputform numform"/></div>
                    <div class="totalev"><em>508</em> </div>
                </div>
                    
                <div class="col ivcol">
                    <div><strong>IVs</strong></div>
                    <div><input type="number" name="iv-hp"  value={this.state.hpIV}  onChange={this.onIVChange} className="textbox inputform numform" min="0" max="31" step="1"/></div>
                    <div><input type="number" name="iv-atk" value={this.state.atkIV}  onChange={this.onIVChange}  className="textbox inputform numform" min="0" max="31" step="1"/></div>
                    <div><input type="number" name="iv-def" value={this.state.defIV}  onChange={this.onIVChange} className="textbox inputform numform" min="0" max="31" step="1"/></div>
                    <div><input type="number" name="iv-spa" value={this.state.spaIV}  onChange={this.onIVChange} className="textbox inputform numform" min="0" max="31" step="1"/></div>
                    <div><input type="number" name="iv-spd" value={this.state.spdIV}  onChange={this.onIVChange} className="textbox inputform numform" min="0" max="31" step="1"/></div>
                    <div><input type="number" name="iv-spe" value={this.state.speIV}  onChange={this.onIVChange} className="textbox inputform numform" min="0" max="31" step="1"/></div>    
                </div>
                {currentPokemon.state ? 
                    <div class="col statscol">
                        <div></div>
                            <div>
                                <b>{parseInt(currentPokemon.state.finalStats[0].final_stat) + parseInt(this.state.hpIV)+ parseInt(this.state.spd)}</b>
                            </div>
                            <div>
                                <b>{parseInt(currentPokemon.state.finalStats[1].final_stat) + parseInt(this.state.atkIV)+ parseInt(this.state.spd)}</b>
                            </div>
                            <div>     
                                <b>{parseInt(currentPokemon.state.finalStats[2].final_stat) + parseInt(this.state.defIV)+ parseInt(this.state.spd)}</b>
                            </div>
                            <div>    
                                <b>{parseInt(currentPokemon.state.finalStats[3].final_stat) + parseInt(this.state.spaIV)+ parseInt(this.state.spd)}</b>
                            </div>
                            <div>    
                                <b>{parseInt(currentPokemon.state.finalStats[4].final_stat) + parseInt(this.state.spdIV)+ parseInt(this.state.spd)}</b>
                            </div>
                            <div>    
                                <b>{parseInt(currentPokemon.state.finalStats[5].final_stat) + parseInt(this.state.speIV)+ parseInt(this.state.spd)}</b>                      
                            </div>
                    </div>                    
                : <div class="col statscol"></div>}   
                <br/>
                <div class="setcol setcol-moves">
                    <button class="favorite styled" onClick={this.saveThisPokemon}
                            type="button">
                        Save
                    </button>
                </div>
                <div class="setcol setcol-moves">
                    <div class="setcell">
                        <label>Moves</label>
                        <input type="text" name="1" onClick={this.onClick_move} class="textbox chartinput" value={this.state.move1} autocomplete="off"/>
                    </div>
                    <div class="setcell">
                        <input type="text" name="2" onClick={this.onClick_move} class="textbox chartinput" value={this.state.move2} autocomplete="off"/>
                    </div>
                    <div class="setcell">
                        <input type="text" name="3" onClick={this.onClick_move} class="textbox chartinput" value={this.state.move3} autocomplete="off"/>
                    </div>
                    <div class="setcell">
                        <input type="text" name="4" onClick={this.onClick_move} class="textbox chartinput" value={this.state.move4} autocomplete="off"/>
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
                        <li class="result" onClick={this.chooseAttack} value={move.name} key={move.name} >
                            <a data-entry={"move|"+move.name} value={move.name} >
                                <div class="col movenamecol" id={move.name}>{move.name}</div> 
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
                </div>
)
    }
}

export default InformationPokemon;