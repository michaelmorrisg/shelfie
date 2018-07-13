import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'


class Dashboard extends Component {
    constructor(){
        super()
        this.state = {

        }
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct(key){
        axios.delete(`/api/product/${key}`)
        .then(response=>{
            this.props.getInventory()
        })
    }


    render(props){
        return(
            <div>
                {this.props.inventory.map((element,i)=>{
                    return(
                    <Product current={this.props.current} key={element.id} info={element} deleteProduct={this.deleteProduct}/>
                    )
                })}
                <button onClick={()=>this.props.current()}>Hey</button>
                
            </div>
        )
    }
}

export default Dashboard