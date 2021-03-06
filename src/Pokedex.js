import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
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
  render () {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>;
    }
    return (
      <div className="Pokedex">
        <h1 className="Pokedex-title">POKEDEX</h1>
        <p>Total Experience: {this.props.exp}</p>
        {title}
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
          ))}
        </div>
        
      </div>
    );

  }
}

export default Pokedex;