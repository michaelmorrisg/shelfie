import React, { Component } from 'react'
import axios from 'axios'


class Form extends Component {
    constructor(){
        super()
        this.state = {
            name : '',
            price : '',
            imgUrl : ''
        }
    }

    handleName(input){
        this.setState({
            name : input
        })
    }

    handlePrice(input){
        this.setState({
            price : input
        })
    }

    handleUrl(input){
        this.setState({
            imgUrl : input
        })
    }

    handleCancel(){
        this.setState({
            name: '',
            price: '',
            imgUrl : ''
        })
    }

    addProduct(props){
        axios.post('/api/product',{name:this.state.name,price:this.state.price,imgUrl:this.state.imgUrl})
        .then(response=>{
            this.props.getInventory()
        })
    }


    render(){
        return(
            <div>
                <input onChange={e=>this.handleName(e.target.value)} value={this.state.name}/>
                <input onChange={e=>this.handlePrice(e.target.value)} value={this.state.price}/>
                <input onChange={e=>this.handleUrl(e.target.value)} value={this.state.imgUrl}/>
                <button onClick={()=>this.handleCancel()}>Cancel</button>
                <button onClick={()=>this.addProduct()}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form