


const pokemonSelect= ({
    
})=>{
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
} 

export default pokemonSelect;