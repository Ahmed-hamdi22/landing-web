import React from 'react'
import Data from '../Data'
import "./Pricing.css"
const Pricing = () => {
    const itempric = Data.pricing.map((itembox,i)=>{
        return (
            <div className='col-md-4'>
          <div className='pricing-box' key={i}>
            
          <h5>{itembox.titel}</h5>
         <h4>{itembox.price}</h4>
         <p>{itembox.time}</p>
         <ul>
    
             <li>
                <span>Bandwidth</span>
                {itembox.Bandwidth}
                </li>
             <li>
             <span>Domain</span>
                {itembox.Domain}
                </li>
             <li>
                <span>Support</span>
                {itembox.Support}
                </li>
                <li>
                    <span>Onlinespace</span>
                    {itembox.Onlinespace}
                    </li>
                <li>
                    <span>HiddenFees</span>
                    {itembox.HiddenFees}
                    </li>
                
         </ul>
         <button>Join now</button>
          </div>
                 
            </div>
        )
    })
  return (
    <section className='pricing'>
        <div className='container'>
            <div className='row'>
                <div className=' col-md-12  col-lg-12'>
                    <h2>OUR PRICING</h2>
                    <p>Call to action pricing table is really crucial to your for your business website. Make your <br/> bids stand-out with amazing options.</p>
                </div>
            </div>
             <div className='row' >
                    {itempric}
                
                </div>
        </div>
      
    </section>
  )
}

export default Pricing
