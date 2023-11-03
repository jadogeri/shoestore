import './Recommended.css'
import React from 'react'

const Recommended = () => {
  return <>
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className='recommended-flex'>
        <button>All Products</button>
        <button>Nike</button> 
        <button>Adidas</button>
        <button>Puma</button>
        <button>Vans</button>
      </div>
    </div>
  </>
}

export default Recommended;