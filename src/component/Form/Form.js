import React, { Component } from 'react'
import axios from 'axios'


class Form extends Component {
    constructor(props){
        super()
        this.state = {
            name : '',
            price : '',
            imgUrl : '',
            currentId : props.current,
            functionalId: null,
            inventory: props.inventory
        }
    }
    componentDidUpdate(prevProps){
        if(this.props.current !== prevProps.current){
            this.setState({
                functionalId : this.props.current,
                name : this.props.name,
                price: this.props.price,
                imgUrl : this.props.url
            })
            console.log("Update",this.state.functionalId)
            console.log(this.state.inventory)
        }
    }
    updateProduct(){
        axios.put(`/api/product/${this.state.functionalId}`,{name:this.state.name,price:this.state.price,imgUrl:this.state.imgUrl})
        .then(this.props.getInventory())
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
            imgUrl : '',
            functionalId: null
        })
    }

    addProduct(props){
        axios.post('/api/product',{name:this.state.name,price:this.state.price,imgUrl:this.state.imgUrl})
        .then(response=>{
            this.props.getInventory()
        })
    }


    render(){
        if(this.state.functionalId===null){
        return(
            <div>
                <input onChange={e=>this.handleName(e.target.value)} value={this.state.name}/>
                <input onChange={e=>this.handlePrice(e.target.value)} value={this.state.price}/>
                <input onChange={e=>this.handleUrl(e.target.value)} value={this.state.imgUrl}/>
                <button onClick={()=>this.handleCancel()}>Cancel</button>
                <button onClick={()=>this.addProduct()}>Add to Inventory</button>
            </div>
        )
    } else {
        return(
            <div>
            <input onChange={e=>this.handleName(e.target.value)} value={this.state.name}/>
            <input onChange={e=>this.handlePrice(e.target.value)} value={this.state.price}/>
            <input onChange={e=>this.handleUrl(e.target.value)} value={this.state.imgUrl}/>
            <button onClick={()=>this.handleCancel()}>Cancel</button>
            <button onClick={()=>this.updateProduct()}>Save Changes</button>
        </div>
        )
    }
}
}

export default Form