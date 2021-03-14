import React from 'react'

const Product =(props)=>{
    const{id, name, price, quantity } = props.value
    return(
        <>
            <tr>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td><button type="button" class="btn btn-success" onClick= {()=>props.updateproduct(id, name,price,quantity,true)}>update</button></td>
                <td><button type="button" class="btn btn-danger" onClick= {()=>props.delete_item(id)} >delete</button></td>
            </tr>

        </>
    )
}

export default Product;