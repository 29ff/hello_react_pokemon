import React, { Component } from 'react';
import '../style_components/Search.css';

class Search extends Component {
   constructor(props) {
      super(props)
      this.state = {
         placeholderInput : 'type Pokemon\'s name'
      }
   }
   focusInput(e) {
      this.setState({ placeholderInput: '' })
   }
   blurInput(e) {
      this.setState({ placeholderInput: 'type Pokemon\'s name' })
   }
   changedInput(e) {
      this.props.updatePokecard(e.target.value)
   }
   render() {
      return (
         <div className="search">
            <input type="text" placeholder={this.state.placeholderInput} onFocus={this.focusInput.bind(this)} onBlur={this.blurInput.bind(this)} onChange={this.changedInput.bind(this)}/>
         </div>
      )
   }
}

export default Search;