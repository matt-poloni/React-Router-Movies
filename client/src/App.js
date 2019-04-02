import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    console.log(movie.id);
    if(this.state.savedList.filter(item => item.id === movie.id).length === 0) {
      savedList.push(movie);
      this.setState({ savedList });
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movie/:id"
          render={props => 
            <Movie
              {...props}
              addToSavedList = {this.addToSavedList}
            />
          }
        />
      </div>
    );
  }
}
