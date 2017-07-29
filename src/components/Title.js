import React, { Component } from 'react';
import '../style_components/Title.css';

class Title extends Component {
   render() {
      return <h1 className="title">{this.props.text}</h1>
   }
}

export default Title;