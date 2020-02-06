import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import SearchBox from './components/SearchBox';
import MovieList from './components/MovieList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1
    }
    this.apiKey = process.env.REACT_APP_API
  }

  handleSubmit = (e) => { 

    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: [...data.results], totalResults: data.totalResults})
    })
    
  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
      .then(data => data.json())
      .then(data => {
        this.setState({ movies: [...data.results], currentPage: pageNumber})
      })
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    let numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div className="App">
        <Nav/>
        <SearchBox handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
          <div className="container">
          </div>
          <MovieList movies={this.state.movies} />
          { this.state.totalResults > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}  /> }
      </div>
    );
  }
}

export default App;
