import React from 'react'
import"./Header.css"
const Header = () => {
  return (
    <header>
        <div className='header-overlay'>
      <div className='container'>
      <div className='row'>
      <div className='col-lg-12 col-md-12 ban'>
        <h2>
        We help startups launch their<br/> products
        </h2>
        <p>Etiam sed.Interdum consequat proin vestibulum class at a euismod mus <br/>luctus quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>
      <form>
        <input type='email' placeholder='Email'/>
        <button>subscribe</button>
      </form>
      </div>
      </div>
      </div>
      </div>
    </header>
  )
}

export default Header
