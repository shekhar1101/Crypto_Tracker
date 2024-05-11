import React, {useState,useEffect} from 'react';
import './App.css';
import Coin from './Coin';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(response => response.json())
        .then(data => setCoins(data)).catch((err)=>{
          console.log('error',err)
        })
    // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    //   .then(response => {
    //     const data = response.json();

    //       // check for error response
    //       if (!response.ok) {
    //           // get error message from body or default to response statusText
    //           const error = (data && data.message) || response.statusText;
    //           return Promise.reject(error);
    //       }
    //       console.log('data2',data);
    //       setCoins(data);
    //   }).catch(error => {
    //     console.error('There was an error!', error);
    //   });
  },[])

  const handleSearch=(e)=>{
    setSearch(e.target.value);
  }

  const filteredCoins=coins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <p className='coin-text'>Crypto Tracker</p>
        <form>
          <input onChange={handleSearch} type='text' placeholder='Search: ' className='coin-input' />
        </form>
      </div>
      <Coin key={'headerCoin'} {...{
        image:'Image',
        'name':'Name',
        'current_price':'Price',
        'symbol':'Symbol',
        'market_cap':'Market Capital',
        'price_change_percentage_24h':'Price Change (in %)',
        'total_volume':'Volume'
      }}/>
      {
        filteredCoins.map(coin=>{
          return(
            <Coin key={coin.id} {...coin}  />
          )
        })
      }
    </div>
  )
}

export default App
