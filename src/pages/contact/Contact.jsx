import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import './contact.css';
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Button from '../../components/button/Button';
import Footer from '../../components/footer/Footer';

const Contact = () => {
  return (
    <>
      <div className="container conmain col-lg-5 col-md-8 text-center">
        <h1>
          Contact
        </h1>

        <p className="text-light fs-6">
         Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
         </p>
      </div>


      <div className="col-lg-7 location-baba col-md-9 col-sm-11 d-flex justify-content-between mx-auto">
        <div className="location d-flex align-items-center gap-2">
          <div className="map-logo">
            <FaMapMarkerAlt className='map-logo-logo'/>
          </div>
          <div className="map">
            <h4 className='m-0 p-0 text-secondary'>Location:</h4>
            <p className='m-0 p-0'>PNY Rawalpindi</p>
          </div>
        </div>

        <div className="location d-flex align-items-center gap-2">
          <div className="map-logo">
            <MdEmail className='map-logo-logo'/>
          </div>
          <div className="map">
            <h4 className='m-0 p-0 text-secondary'>Location:</h4>
            <p className='m-0 p-0'>Example@gmail.com</p>
          </div>
        </div>

        <div className="location d-flex align-items-center gap-2">
          <div className="map-logo">
            <IoIosPhonePortrait className='map-logo-logo'/>
          </div>
          <div className="map">
            <h4 className='m-0 p-0 text-secondary'>Phone:</h4>
            <p className='m-0 p-0'>+92 3054313910</p>
          </div>
        </div>
      </div>

      <div className="my-5 col-lg-7 col-md-9 col-sm-11 form text-center mx-auto">
        <div className="mb-3 gap-3 d-flex align-items-center">
          <input type="text" className='w-50 py-2 form-control' placeholder='First Name' />
        
          <input type="text" w-50 className='w-50 py-2 form-control' placeholder='Last Name' />
        </div>
        <div className="col-lg-12 mb-3">
          <input type="text" style={{ width: '100%' }} className='py-2 form-control' placeholder='Enter Email' />
        </div>

        <div className="col-lg-12 mb-4">
          <textarea className='form-control' name="" id="" cols="30" rows="5"></textarea>
        </div>

        <Button content={'Send Message'}/>
      </div>

      <Footer/>
    </>
  )
}

export default Contact
