import React, { Component } from 'react';
import Title from './components/Title';
import Search from './components/Search';
import PokeCard from './components/PokeCard';
import Footer from './components/Footer';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokedex: this.props.pokedex
    }
  }
  onUpdate(word) {
    let newPokedex = this.props.pokedex.filter(p => p.name.indexOf(word) > -1)
    this.setState({ pokedex: newPokedex })
  }
  render() {
    return (
      <div>
        <Title text="PokePedia"/>
        <Search updatePokecard = {this.onUpdate.bind(this)}/>
        <section className="content">
          {
            this.state.pokedex.map(pokemon => <PokeCard key={pokemon.id} name={pokemon.name} />)
          }
        </section>
        <Footer link="https://www.facebook.com/beaherooo"/>
      </div>
    );
  }
}

export default App;
