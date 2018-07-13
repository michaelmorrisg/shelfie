import React from 'react'

export default function Product(props){
    return(
        <div>
            {props.info.name} <br/>
            {props.info.price} <br/>
            {props.info.imgUrl}
        </div>
    )
}