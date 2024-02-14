import React from 'react'
import { FaExpandAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SinglePhoto = ({id, image, show, singleImage, setSingleImage}) => {
    const Clicking = ()=>{
        show(true);
        setSingleImage(image)
    }
  return (
    <>
      <div className="col-lg-3 ">
        <div className="card card-img my-2 border-0">
            <div className="overlay">
                <div className="icon" style={{ height: '100%' }}>
                    <div className="d-flex align-items-center justify-content-center gap-4" style={{ height: '100%' }}>
                        <FaExpandAlt cursor='pointer' onClick={Clicking} size={20}/>
                        <Link to={`/details/${id}`}>
                        <FaLink cursor='pointer' size={20}/>
                        </Link>
                    </div>
                </div>
            </div>
            <img className='rounded' width={'100%'} style={{ objectFit: 'cover' }} src={image} alt="" />
        </div>
      </div>
    </>
  )
}

export default SinglePhoto
