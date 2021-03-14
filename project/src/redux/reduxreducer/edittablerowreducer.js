const initialstate ={
    iswindowpopup:false,
    id:0,
    name:"",
    price:"",
    quantity:""
}
const edittablerowreducer =(state=initialstate, action)=>{
    switch (action.type) {
        case "TABLEROWEDIT":
            return{
                ...state,
                ...action.payload
            }
            
            break;
    
        default:
            return state;
    }

}
export default edittablerowreducer;