import React, { Component } from 'react'
import Product from '../Product/Product'


class Dashboard extends Component {
    constructor(){
        super()
        this.state = {

        }
    }




    render(props){
        return(
            <div>
                {this.props.inventory.map(element=>{
                    return(
                    <Product info={element}/>
                    )
                })}
                
            </div>
        )
    }
}

export default Dashboard