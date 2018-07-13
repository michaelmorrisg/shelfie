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
      inventory: [],
      currentlySelected: null,
      currentName: '',
      currentPrice: null,
      currentUrl: ''
    }

    this.getInventory = this.getInventory.bind(this)
    this.currentSelected = this.currentSelected.bind(this)
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

  currentSelected(input,name,price,url){
    this.setState({
        currentlySelected : input,
        currentName: name,
        currentPrice: price,
        currentUrl: url
    })
    console.log(this.state.currentlySelected,this.state.currentPrice)
}
  render() {
    return (
      <div className="App">
        <Dashboard current={this.currentSelected} inventory={this.state.inventory} getInventory={this.getInventory} />
        <Form inventory={this.state.inventory} getInventory={this.getInventory} current={this.state.currentlySelected} name={this.state.currentName} price={this.state.currentPrice} url={this.state.currentUrl}/>
        <Header />
      </div>
    );
  }
}

export default App;
