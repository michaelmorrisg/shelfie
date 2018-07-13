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
                {this.props.inventory.map((element,i)=>{
                    return(
                    <Product key={i} info={element}/>
                    )
                })}
                
            </div>
        )
    }
}

export default Dashboard