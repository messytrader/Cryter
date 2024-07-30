import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'
const Home = () => {

      const{allcoin,currency}=useContext(CoinContext)
      const [display,setdisplay]=useState([])
      const [input , setinput]=useState("")

      const inputhandler=(e)=>{
     setinput(e.target.value);
     if(e.target.value===""){
        setdisplay(allcoin);
     }
      }

      const searchHandler= async(e)=>{
        e.preventDefault();
        const coins=await allcoin.filter((item)=>{
            return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setdisplay(coins)
      }
     useEffect(()=>{
        setdisplay(allcoin)
     },[allcoin])


  return (
    <div className='home'>
        <div className="main-div">
            <h1>Largest <br /> Krypto Bazar</h1>
            <p>Welcome to the world larget Krypto Bazar !</p>
            <form onSubmit={searchHandler}>
                <input type="text" onChange={
                    inputhandler} list='coinlist' value={input} required placeholder='Search ur Krypto...' />

                  <datalist id='coinlist'>
                    {allcoin.map((item,index)=>(<option key={index} value={item.name}/>))}
                  </datalist>

                <button type='submit'>Search</button>
            </form>
        </div>
        <div className="crypto-table">
            <div className="table-layout">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p className='changi'>24H Change</p>
                <p className='market-cap'>Market Cap</p>
            </div>
            {display.slice(0,10).map((item,index)=>(
                <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
                    <p>{item.market_cap_rank}</p>
                    <div>
                        <img src={item.image} alt="" />
                        <p>{item.name+" - " + item.symbol}</p>
                    </div>
                    <p>{currency.symbol} {item.current_price}</p>
                    <p className={item.price_change_percentage_24h>0?"green":"red"}>
                        {Math.floor(item.price_change_percentage_24h*100)/100}</p>
                    <p className='market-cap'>{currency.symbol} {item.market_cap}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Home