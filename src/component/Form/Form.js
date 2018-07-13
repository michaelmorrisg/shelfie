import React, { Component } from 'react'


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

    render(){
        return(
            <div>
                <input onChange={e=>this.handleName(e.target.value)} value={this.state.name}/>
                <input onChange={e=>this.handlePrice(e.target.value)} value={this.state.price}/>
                <input onChange={e=>this.handleUrl(e.target.value)} value={this.state.imgUrl}/>
                <button onClick={()=>{this.handleCancel()}}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}

export default Form