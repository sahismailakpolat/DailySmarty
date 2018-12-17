import React, { Component } from 'react';
import Logo from './logo';
import Searchbar from './searchBar';
import RecentPosts from './recentPosts';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {


  handleSearchBarSubmit(query) {
    this.props.fetchPostsWithQuery(query, () => {
      this.props.history.push('/results');
    });
    this.props.history.push('/results');
  }


  render() {
    return (
      <div className="home">
        <Logo />
        <Searchbar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
        <RecentPosts />
      </div>
    );
  }
}

export default connect(null, actions)(Home);