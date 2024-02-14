import React from 'react'
import Button from '../../components/button/Button'
import { SlGraph } from "react-icons/sl";
import './services.css';
import Slider from '../about/Slider';
import Footer from '../../components/footer/Footer';
const Service = () => {
  return (
    <>
      <div className="container conmain col-lg-5 col-md-8 text-center">
        <h1>
          Services
        </h1>

        <p className="text-light fs-6">
         Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
         </p>
        <Button content="Available For Hire" />
      </div>


      <div className="col-12">
        <div className="row gap-4 align-items-center justify-content-center">

          <div className="cardname p-5 col-lg-2 d-flex flex-column">
            
            <div className="overlays"></div>
            <div className="circle ">
              <SlGraph className='circlelogo'/>
            </div>
            <h4>Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptatem.</p>
          </div>

          <div className="cardname p-5 col-lg-2 d-flex flex-column">

            <div className="overlays"></div>
            <div className="circle ">
              <SlGraph className='circlelogo'/>
            </div>
            <h4>Lorem Dit</h4>
            <p>Lit amet consectetur adipisicing elit. Pariatur, voluptatem.</p>
          </div>

          <div className="cardname p-5 col-lg-2 d-flex flex-column">

            <div className="overlays"></div>
            <div className="circle ">
              <SlGraph className='circlelogo'/>
            </div>
            <h4>Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptatem.</p>
          </div>

          <div className="cardname p-5 col-lg-2 d-flex flex-column">

            <div className="overlays"></div>
            <div className="circle ">
              <SlGraph className='circlelogo'/>
            </div>
            <h4>Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptatem.</p>
          </div>
        </div>
      </div>

      <div className="container my-5">
      <div className="test d-flex align-items-center">
        <h4>Prices</h4>
        <div className="hrr"></div>
      </div>
      <h1><i>Check my adorable pricing</i></h1>
      </div>

      <div className="col-12 my-4">

        <div className="row mx-auto align-items-center justify-content-center">
        <div className="col-lg-5">
          <div className="first-price d-flex align-items-center justify-content-between">
            <h4 className='text-secondary'>Mobile App</h4>
            <h5>$100.00</h5>
          </div>

          <div className="first-price d-flex align-items-center justify-content-between">
            <h4 className='text-secondary'>Mobile App</h4>
            <h5>$100.00</h5>
          </div>

          <div className="first-price d-flex align-items-center justify-content-between">
            <h4 className='text-secondary'>Mobile App</h4>
            <h5>$100.00</h5>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="first-price d-flex align-items-center justify-content-between">
            <h4 className='text-secondary'>Mobile App</h4>
            <h5>$100.00</h5>
          </div>

          <div className="first-price d-flex align-items-center justify-content-between">
            <h4 className='text-secondary'>Mobile App</h4>
            <h5>$100.00</h5>
          </div>

          <div className="first-price d-flex align-items-center justify-content-between">
            <h4 className='text-secondary'>Mobile App</h4>
            <h5>$100.00</h5>
          </div>
        </div>
        </div>

      </div>

      <div className="container my-5">
      <div className="test d-flex align-items-center">
        <h4>Testimonials</h4>
        <div className="hrr"></div>
      </div>
      <h1><i>What they are saying</i></h1>
      </div>

      <Slider/>

      <Footer/>
    </>
  )
}

export default Service
