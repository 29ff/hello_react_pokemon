import React, { Component } from 'react';
import '../style_components/PokeCard.css';

class PokeCard extends Component {
   render() {
      return (
         <article className="pokecard">
            <h3>{this.props.name}</h3>
            <img src={"https://img.pokemondb.net/artwork/" + this.props.name + ".jpg"} alt={this.props.name} />
         </article>
      )
   }
}

export default PokeCard;