import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      {id: 1, name: 'Bulbasaur', type: 'Grass, Poison', base_experience: 62},
      {id: 2, name: 'Ivysaur', type: 'Grass, Poison', base_experience: 63},
      {id: 3, name: 'Venusaur', type: 'Grass, Poison', base_experience: 72},
      {id: 4, name: 'Charmander', type: 'Fire', base_experience: 178},
      {id: 5, name: 'Charmeleon', type: 'Fire', base_experience: 112},
      {id: 6, name: 'Charizard', type: 'Fire, Flying', base_experience: 95},
      {id: 7, name: 'Squirtle', type: 'Water', base_experience: 225},
      {id: 8, name: 'Wartortle', type: 'Water', base_experience: 800},
      {id: 9, name: 'Blastoise', type: 'Water', base_experience: 950},
      {id: 10, name: 'Caterpie', type: 'Bug', base_experience: 63},
      {id: 11, name: 'Metapod', type: 'Bug', base_experience: 98},
      {id: 12, name: 'Butterfree', type: 'Bug, Flying', base_experience: 65},
      {id: 13, name: 'Weedle', type: 'Bug, Poison', base_experience: 23},
      {id: 14, name: 'Kakuna', type: 'Bug, Poison', base_experience: 57},
      {id: 15, name: 'Beedrill', type: 'Bug, Poison', base_experience: 100},
      {id: 16, name: 'Pidgey', type: 'Normal, Flying', base_experience: 300},
      {id: 17, name: 'Pidgeotto', type: 'Normal, Flying', base_experience: 428},
      {id: 18, name: 'Pidgeot', type: 'Normal, Flying', base_experience: 460},
      {id: 19, name: 'Rattata', type: 'Normal', base_experience: 65},
      {id: 20, name: 'Raticate', type: 'Normal', base_experience: 600},
      {id: 21, name: 'Spearow', type: 'Normal, Flying', base_experience: 650},
      {id: 22, name: 'Fearow', type: 'Normal, Flying', base_experience: 650}
    ]

  }
  render(){
    let hand1= [];
    let hand2= [ ...this.props.pokemon ];
    while(hand1.length < hand2.length){
      let randIdx = Math.floor(Math.random() * hand2.length );
      console.log(randIdx);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
      console.log(randPokemon, "randPokemon")
    }

    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);


    return (
      <div>
        < Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
        < Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}/>
      </div>        
    )
  }
}

export default Pokegame;