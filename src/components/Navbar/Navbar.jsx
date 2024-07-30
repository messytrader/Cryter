import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import { CoinContext } from '../../context/CoinContext'
//import dogy from '../../assets/dogy.jpeg'
import { Link } from 'react-router-dom'


const Navbar = () => {
const{setallcurrency}=useContext(CoinContext)
const currencyhandler=(e)=>{
    switch(e.target.value){
        case "usd":{
            setallcurrency({name:"usd",symbol:"$"});
            break;
        }
        case "inr":{
            setallcurrency({name:"inr",symbol:"₹"});
            break;
        }
        case "eur":{
            setallcurrency({name:"eur",symbol:"ē"});
            break;
        }
        default :{
            setallcurrency({name:"usd",symbol:"$"});
            
        }
    }

}

  return (
    <div className='navbar'>
        <Link to= {'/'}>
        <img src={logo} alt="" className='logo'/></Link>
        <ul>
        <Link to= {'/'}>  <li>Home</li></Link>
            {/* <li>Feature</li>
            <li>Price</li> */}
            <li>Blog</li>
        </ul> 
        <div className='nav-right'>
         <select  onChange={currencyhandler} id=""> 
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
         </select>
         
         <button>Sign Up </button>
        </div>
    </div>
  )
}

export default Navbar