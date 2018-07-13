import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [{name: "shoes",price:"12.88",imgUrl:'asldfjsdf'},
                  {name: "pants",price: "32.56",imgUrl: 'hellothere'},
                  {name: "slippers",price: "100.99",imgUrl: 'fake'}]
    }
  }
  render() {
    return (
      <div className="App">
        <Dashboard inventory={this.state.inventory} />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
