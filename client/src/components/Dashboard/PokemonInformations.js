import React, {Component} from 'react'
import FetchData from "../../helpers/fetch-data";

class PokemonInformations extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount = () =>{}

      validerMesChangement = () =>{
          this.props.validerMesChangement(this.state.changement)
      }

    render(){
        const {pokemon}=this.props;

        return(
            <div>
                {pokemon&&
                    <div>
                        
                    </div>
                }
                <button onclick={this.validerMesChangement}>

                </button>
            </div>
        )
    };

}

export default PokemonInformations
