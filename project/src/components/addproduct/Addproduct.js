import React from "react"
import { useState } from "react";
import Addproductaction from "../../redux/reduxaction/Addproductaction"
import {connect} from "react-redux"
import { toast } from "react-toastify";


const Addproduct = (props)=>{
   
    const forminitialstate ={
        id: 0,
        name: "",
        price: "",
        quantity:0
    }

    const [formstate, setformstate] = useState(()=> forminitialstate)

    const notifys=(text)=>{
        toast(text, {position:toast.POSITION.TOP_CENTER, autoClose:3000})
    }
    const inputHandle = (Event)=>{
        const {name , value} = Event.target
        setformstate ((previousstate)=>{
            return(
                {
                    ...previousstate,
                    [name] : value
                }
            )
        })
    }

    const validate=()=>{
        if(formstate.id  < 1){
            notifys("id should be greater than zero");
        }
        else if(formstate.name === ""){
            notifys("Enter product name");
        }
        else if(formstate.price === ""){
            notifys("Enter product price");
        }
        else if(formstate.quantity === ""){
            notifys("Enter product quantity");
        }
        else{
            return true
        }

        
    }
    
    const productadd = (event)=>{
        if(validate()){
            const id = props.productstate.filter((item)=> item.id == formstate.id)
            if(id.length > 0){
                notifys("id exist! id must be unique")
            }else{
                props.actiondispatch(formstate)
                event.preventDefault();
            }
        }
        event.preventDefault();
        

    }

    return(
        <>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="product_id" class="form-label">Product id</label>
                    <input type="number" class="form-control"
                    id="product_id" 
                    name="id" 
                    placeholder="Enter product id"
                    onChange={inputHandle}
                    required/>
                </div>
                <div class="col-md-6">
                    <label for="product_name" class="form-label">product name</label>
                    <input type="text" class="form-control" 
                    id="product_name" 
                    name='name' 
                    placeholder="Enter product name"
                    onChange= {inputHandle}
                    required/>
                </div>
                <div class="col-md-6">
                    <label for="product_price" class="form-label">Product price</label>
                    <input type="text" class="form-control" 
                    id="product_price" 
                    name="price" 
                    placeholder="Enter product Price" 
                    onChange={inputHandle}
                    required/>
                </div>
                <div class="col-md-6">
                    <label for="quantity" class="form-label">product quantity</label>
                    <input type="text" class="form-control"  
                    id="product_quantity" 
                    name="quantity" 
                    placeholder="Enter product quantity"
                    onChange={inputHandle}
                    required/>
                </div>
                
                <div class="col-12 d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary" onClick={productadd}>Add Product</button>
                </div>
            </form>
           <hr/>
        <br/>
        <br/>
        </>
    )
}

const mapStateToProp = (state)=>{
    return{
        productstate : state.products
    }
}

const mapDispatchToprop = (dispatch)=>{
    return{
        actiondispatch : (productdata)=> {dispatch(Addproductaction(productdata))}

    }
}

export default connect(mapStateToProp, mapDispatchToprop)(Addproduct);

 