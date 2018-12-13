import React, { Component } from 'react';
import Logo from './logo';
import Searchbar from './searchBar';
import RecentPosts from './recentPosts';

export default class Home extends Component {


  handleSearchBarSubmit(query) {
    console.log('trying to handle submit query', query);
    this.props.history.push('/results');
  }


  render() {
    return (
      <div>
        <div>
          <Logo />
          <Searchbar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
          <RecentPosts />
        </div>
      </div>
    );
  }
}