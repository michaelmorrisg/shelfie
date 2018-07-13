import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }

    this.getInventory = this.getInventory.bind(this)
  }
  componentDidMount(){
    axios.get('/api/inventory')
    .then(response=>{
      this.setState({
        inventory : response.data
      })
      console.log(this.state.inventory)
    })
  }
  getInventory(){
    axios.get('/api/inventory')
    .then(response => {
      this.setState({
        inventory: response.data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Dashboard inventory={this.state.inventory} />
        <Form getInventory={this.getInventory}/>
        <Header />
      </div>
    );
  }
}

export default App;
