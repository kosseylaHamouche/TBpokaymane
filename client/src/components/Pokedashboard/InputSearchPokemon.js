import Autocomplete from "react-autocomplete";
import React from 'react'
const  InputSearchPokemon = ({
    pokemons,
    value,
    onChangeText,
    selectPokemon
})=>(
    <div className="InputSearch">
        <Autocomplete
            const items={pokemons.map(item => ({
                id: item,
                label: item
            }))}
            shouldItemRender={(item, value) =>
                item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
            }
            getItemValue={item => item.label}
            initialValue=""
            value={value}
            onChange={onChangeText}
            onSelect={selectPokemon}
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
    </div>
)


export default InputSearchPokemon;