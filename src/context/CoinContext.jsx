import { createContext, useEffect, useState } from "react";


export const CoinContext=createContext();

const CoinContextProvider=(props)=>{

    const [allcoin,setallcoin]=useState([]);
    const [currency,setallcurrency]=useState({
        name:"usd",
        symbol:"$"
    });
    const fetchcoin=async()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-5LZMyd8jz1Kh9NNUmteVocsY'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setallcoin(response))
            .catch(err => console.error(err));
    }

    useEffect(()=>{
      fetchcoin()
    },[currency])

    const ContextValue={
     allcoin,currency,setallcurrency
    }
    return(
    <CoinContext.Provider value={ContextValue}>
        {props.children}
    </CoinContext.Provider>
    )

}

export default CoinContextProvider;