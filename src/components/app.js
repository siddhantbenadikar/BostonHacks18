import React, { Component } from 'react';
import SearchBar from '../container/search_bar';
import PlaceList from '../container/place_list';

export default class App extends Component {
  render() {
    return (
      <div>
          <SearchBar />
          <PlaceList />
      </div>
    );
  }
}
