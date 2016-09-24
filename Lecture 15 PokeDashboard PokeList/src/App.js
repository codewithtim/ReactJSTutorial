import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import PokeList from './components/PokeList';
import { Col } from 'react-bootstrap/lib/';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    };

    this.loadPokemon = this.loadPokemon.bind(this);
  }

  loadPokemon(url) {
    fetch(url)
      .then(response => {
        return response.json();
      }).then(json => {
        console.log(json);
        let pages = Math.round(json.count / this.state.limit);

        this.setState({
          pokemon: json.results,
          totalPages: pages,
          count: json.count
        });
        console.log(this.state)
      }).catch(err => {
        console.log(err)
      })
  }

  componentWillMount() {
    this.loadPokemon(`${this.props.baseUrl}/pokemon/`);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Col sm={8} md={10} smOffset={2} mdOffset={1} >
          <PokeList listOfPokemon={this.state.pokemon} />
        </Col>

      </div>
    );
  }
}

export default App;
