import React from 'react'
import './Coin.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Coin = ({name, image, symbol, market_cap, current_price,total_volume,price_change_percentage_24h}) => {
  return (
    <div className='coin-container'>
      <div className='row' style={{margin:'18px auto 0px', width:'80%', borderBottom:'2px solid #d7d7d7'}}>
        <div className='col-lg-1 '>
          {
            image!='Image' ? (
              <img className='coin-image' alt='crypto' src={image} />
            ):(
              <p>Image</p>
            )
          }
        </div>
        <div className='col-lg-2 '>
          <p className='coin-name'>{name}</p>
        </div>
        <div className='col-lg-1 '>
          <p className='coin-symbol'>{symbol.toUpperCase()}</p>
        </div>
        <div className='col-lg-2 '>
          <p className='coin-price'>${current_price}</p>
        </div>
        <div className='col-lg-3 '>
          <p className='coin-volume'>${market_cap.toLocaleString()}</p>
        </div>
        <div className='col-lg-1 '>
          {
            isNaN(price_change_percentage_24h)?(
              <p>Price</p>
            ) :
            (price_change_percentage_24h<0 ?(
            <p className='coin-percent red' >{price_change_percentage_24h.toFixed(2)}%</p>)
            :(
              <p className='coin-percent green' >{price_change_percentage_24h?(price_change_percentage_24h.toFixed(2)):(0)}%</p>
            ))
          }
        </div>
        <div className='col-lg-2 '>
          <p className='coin-market-cap'>${total_volume.toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}

export default Coin;
