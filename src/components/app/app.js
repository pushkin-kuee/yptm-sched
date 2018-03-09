import React, { Component } from 'react';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">Welcome to React</h1>
        </header>
        <p className="app__intro">
          To get started, edit <code>src/app.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
