import React, { Component } from 'react';
import './App.css';
import PostList from './Components/PostList'
import NewPost from './Components/NewPost'

class App extends Component {
  render() {
    return (
      <div>
        <PostList />
      </div>
    )
  }
}

export default App;
