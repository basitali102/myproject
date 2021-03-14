// import logo from './logo.svg';
// import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Addproduct from "./components/addproduct/Addproduct"
import Displayproduct from "./components/displayproduct/Displayproduct"
import Productupdate from "./components/updateproduct/Productupdate"
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
toast.configure()

function App() {
  return (
    <div className="App container">
       
        <Addproduct />
        <Displayproduct />
        
    
    </div>
  );
}

export default App;
