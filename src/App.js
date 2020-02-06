import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import SearchBox from './components/SearchBox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: ''
    }
    this.apiKey = process.env.REACT_APP_API
  }

  handleSubmit = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies:[...data.results] })
    })
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        <SearchBox handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
          <div className="container">

          </div>
      </div>
    );
  }
}

export default App;
