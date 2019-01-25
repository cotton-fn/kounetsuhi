import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import reducer from './reducers';
import NavBar from './NavBar';
import HomePage from './HomePage';
import EditPage from './EditPage';
import AddPage from './AddPage';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <Route path="/" exact component={HomePage} />
            <Route path="/edit" exact component={EditPage} />
            <Route path="/edit/:year/:month" component={EditPage} />
            <Route path="/add" component={AddPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
