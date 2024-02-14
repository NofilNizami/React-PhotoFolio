import React, { useState } from 'react'
import Button from '../../components/button/Button'
import './home.css'
import { photoss } from './photos/data'
import Photos from './photos/Photos'
import { CgClose } from "react-icons/cg";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import Footer from '../../components/footer/Footer'


const Home = () => {
  const [imageShow, setImageShow] = useState(false);

  const [singleImage, setSingleImage] = useState('');

  return (
    <>

    <div style={{ 
      transition: 'all 0.4s',
      scale: `${imageShow ? '1' : '0'}`
     }} className="image-overlay">

      <CgClose onClick={()=>setImageShow(false)} className='cross-overlay' size={30}/>
      <div className="w-100 position-absolute d-flex justify-content-between">
        <IoIosArrowDropleft  className='left' size={25}/>
      <IoIosArrowDropright  className='right' size={25}/>
      </div>
      <div className="open-img w-50 mx-auto d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
        <img style={{ 
      transition: 'all 2s',
      scale: `${imageShow ? '1' : '0'}`
     }} height={'100%'} width={'100%'} src={singleImage} alt="" />
      </div>

    </div>
    

      <div className="container conmain col-lg-4 col-md-8 text-center">
        <h2>I'm <span className='name'>Jenny Wilson</span> a Professional Photographer from New York City</h2>

        <p className="text-secondary">
          Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.
        </p>
        <Button content="Available For Hire"/>

      </div>
        <Photos photo ={photoss} show={setImageShow} singleImage={singleImage}  setSingleImage={setSingleImage}/>

        <Footer/>
    </>
  )
}

export default Home
