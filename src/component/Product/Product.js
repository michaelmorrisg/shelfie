import React from 'react'

export default function Product(props){
    return(
        <div>
            {props.info.name} <br/>
            {props.info.price} <br/>
            <img src={props.info.img_url}/>
            <button onClick={()=>props.deleteProduct(props.info.id)}>Delete</button>
            <button onClick={()=>props.current(props.info.id,props.info.name,props.info.price,props.info.img_url)}>Edit</button>
        </div>
    )
}