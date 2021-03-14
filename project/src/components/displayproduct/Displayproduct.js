import React from 'react'
import {connect} from 'react-redux'
import Deleteproductaction from '../../redux/reduxaction/Deleteproductaction';
import Updateproduct from '../../redux/reduxaction/Updateproduct';
import Product from "./Product"
import Productupdate from "../updateproduct/Productupdate"
import isupdatetablerows from '../../redux/reduxaction/isupdatetablerows';


const Displayproduct = (props)=>{

    const delete_item = (id)=>{
        const product = [...props.product];
        console.log(id)
        const filter_product = product.filter((item)=> item.id !== id)
        console.log(`filter function ${filter_product}`)
        props.product_filter(filter_product);
    }

    const updateproduct =(id,name,price,quantity,isboolean)=>{
        props.editrowprops({id:id, name:name, price:price, quantity:quantity, iswindowpopup:isboolean});
        
    }

    const product = [...props.product];
    const product_list = product.filter((item)=> item.id>0).map((item)=>{
        return(
            <Product key={item.id} value={item} delete_item ={delete_item} updateproduct ={updateproduct}  />   
        )
    })


    return(
    <>

        {props.editbuttonprops.iswindowpopup &&(<Productupdate />)}
        <hr/>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">product id</th>
                    <th scope="col">product name</th>
                    <th scope="col">product quantity</th>
                    <th scope="col">product quantity</th>
                    <th scope="col">Edit</th>
                    <th scope="col">delete</th>
                </tr>
            </thead>
            <tbody>
                {product_list}
            </tbody>
        </table>
       
    </>
    )
}

const mapStateToProp = (state)=>{
    console.log(state.products)
    console.log(state.editbuttonprops);
    return{
        product : state.products,
        editbuttonprops: state.iseditrow
    }
}

const mapDispatchToprop= (dispatch)=>{
    return {
        product_filter : (product) =>dispatch(Deleteproductaction(product)),
        update_product : (updated_state)=>dispatch(Updateproduct(updated_state)),
        editrowprops: (rowprops)=>dispatch(isupdatetablerows(rowprops))
    }
}
export default connect(mapStateToProp, mapDispatchToprop)(Displayproduct);