import React, { useContext, useEffect,useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext'
import LineChart from '../../components/LineChart/LineChart'

const Coin = () => {

    const {coinId}=useParams()

    const [coindata,setcoindata]=useState();
    const [earlydata,setearlydata]=useState();
    const{currency}=useContext(CoinContext);
    const fetchcoindata=async()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-5LZMyd8jz1Kh9NNUmteVocsY'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
            .then(response => response.json())
            .then(response => setcoindata(response))
            .catch(err => console.error(err));
    }

    const fetchearlydata=async()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-5LZMyd8jz1Kh9NNUmteVocsY'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=15&interval=daily`, options)
            .then(response => response.json())
            .then(response => setearlydata(response))
            .catch(err => console.error(err));

    }
    useEffect(()=>{
        fetchcoindata();
        fetchearlydata();
    },[currency])
  if(coindata && earlydata){
    return (
        <div className='coin'>
            <div className="coin-name">
                <img src={coindata.image.large} alt="" />
                <p><b>{coindata.name} ({coindata.symbol.toUpperCase()})</b></p>
            </div>
            <div className="linechart">  <LineChart earlydata={earlydata}/></div>
            <div className="coin-info">
                <ul>
                    <li>Krypto Market Rank</li>
                    <li>{coindata.market_cap_rank}</li>
                    </ul>
                    <ul>
                    <li>Current Price</li>
                    <li>{currency.symbol} {coindata.market_data.current_price[currency.name].toLocaleString()}</li>
                </ul>
                <ul>
                    <li>Market Cap</li>
                    <li>{currency.symbol} {coindata.market_data.market_cap[currency.name].toLocaleString()}</li>
                </ul>
                <ul>
                    <li>24Hr High</li>
                    <li>{currency.symbol} {coindata.market_data.high_24h[currency.name].toLocaleString()}</li>
                </ul>
                <ul>
                    <li>24Hr Low</li>
                    <li>{currency.symbol} {coindata.market_data.low_24h[currency.name].toLocaleString()}</li>
                </ul>
            </div>



          
        </div>
      )
  }else{
    return(
        <div className="spinner">
            <div className="spin">

            </div>
        </div>
    )
  }
  
}

export default Coin