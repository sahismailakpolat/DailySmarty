import React, { Component } from 'react';
import Logo from './logo';
import Searchbar from './searchBar';
import RecentPosts from './recentPosts';

export default class App extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Searchbar />
        <RecentPosts />
      </div>
    );
  }
}
