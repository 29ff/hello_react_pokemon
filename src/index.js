import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const pokedex = [ 
   { id: 1, name: 'pichu' }, 
   { id: 2, name: 'ivysaur' }, 
   { id: 3, name: 'horsea' }, 
   { id: 4, name: 'pikachu' }, 
   { id: 5, name: 'kingdra' }, 
   { id: 6, name: 'mew' }, 
   { id: 7, name: 'mewtwo' }, 
   { id: 8, name: 'charmeleon'} 
];

ReactDOM.render(<App pokedex={pokedex}/>, document.getElementById('root'));
registerServiceWorker();
