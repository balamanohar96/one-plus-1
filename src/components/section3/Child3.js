import React from 'react'
import './Child3.css'

function Child3() {
  return (
    <div>
        <h3 className='hot p-5 pb-0'>This week's Hot Picks</h3>
        <div className='p-5 pb-3 pt-0'><hr></hr></div>
        <ul className='link_list d-flex p-5 '>
            <li><a className='spotlight' href="@">Highlights</a></li>
            <li><a href="@">Phones</a></li>
            <li><a href="@">Audio</a></li>
            <li><a href="@">TV</a></li>
            <li><a href="@">Accessories</a></li>
        </ul>
        <div className='d-flex justify-content-between p-5 cards_holder'>
            <div className='small_hot_card'>
              <div className='image_holder'>
                <img alt='small phone' className='hot_card_image bg-light' src='https://image01-in.oneplus.net/ebp/202206/27/1-m00-3b-dd-cpgm7mk5vmiawm_aaainunb6sqg656_420_420.png'></img>
              </div>              
              <h3>One Plus Nord 2T 5G</h3>
              <button className='special_button'>From $28999</button>
            </div>
            <div className='small_hot_card'>
              <div className='image_holder'>
                <img alt='small phone' className='hot_card_image bg-light' src='https://image01.oneplus.net/ebp/202204/26/1-m00-3a-03-rb8bwmjnz4aawz6aaaorqdzzzgk130_420_420.png'></img>
              </div> 
              <h3>One Plus 10R 5G</h3>
              <p className='off mb-1'>Up to 10% OFF</p>
              <button className='special_button'>From $34999</button>
            </div>
            <div className='small_hot_card'>
              <div className='image_holder'>
                <img alt='small phone' className='hot_card_image bg-light' src='https://image01-in.oneplus.net/ebp/202207/01/1-m00-3c-27-cpgm7mk-rmeazkndaadr_gdtqd0750_420_420.png'></img>
              </div> 
              <h3>One Plus Nord Buds</h3>
              <button className='special_button'>From $27999</button>
            </div>
            <div className='small_hot_card mb-5'>
              <div className='image_holder'>
                <img alt='small phone' className='hot_card_image bg-light' src='https://image01.oneplus.net/ebp/202106/28/1-m00-27-69-rb8bwmdzqd2aifxbaadx_lh1oai926_420_420.png'></img>
              </div>              
              <h3>One Plus TV U Series 50 | 55 | 65 U1S</h3>
              <p className='off'>Up to 28% OFF</p>
              <p className='mb-1'>Smarter 4K Cinematic Experince</p>
              <button className='special_button'>From $37999</button>
            </div>
        </div>
        <div className='text-center mb-5'><button className='butttton'>View all products &gt;</button></div>
        
    </div>
  )
}

export default Child3