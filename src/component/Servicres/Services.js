import React from 'react'
import Data from '../Data'
import Servitem from './Servitem'
import"./Services.css"
import Serv2 from './Serv2'
const Services = () => {
    const item = Data.serv.map((itembox)=>{
        return(
            <div className='col-md-4'>
             <Servitem title={itembox.titel} text={itembox.text} icon={itembox.icon}/>
            </div>
        )
    })
  return (
    <section className='services'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-12 col-md-12 '>
                <h2>OUR SERVICES</h2>
                <p>
                We craft digital, graphic and dimensional thinking, to create category leading <br/>
                 brand experiences that have meaning and add a value for our clients.
                </p>

            </div>
        </div>
        <div className='row '>
            {item}
               </div>

                        
       
                        
      </div>
      <Serv2/>
    </section>
  )
}

export default Services
