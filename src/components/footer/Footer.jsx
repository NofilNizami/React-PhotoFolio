import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div>
      <hr className='w-100 my-4' />

        <div className="d-flex align-items-center justify-content-center flex-column text-center">
          <p className='m-0 p-0 copy'>© Copyright <b>PhotoFolio.</b> All Rights Reserved</p>
          <p className='mt-0 mb-4 p-0 design'>Designed by <span>Nofil Nizami</span></p>
        </div>
    </div>
  )
}

export default Footer
