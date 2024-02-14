import React from 'react'
import SinglePhoto from './SinglePhoto'

const Photos = ({photo, show, singleImage, setSingleImage}) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
            {photo.map((photo)=>{
        return <SinglePhoto singleImage={singleImage}  setSingleImage={setSingleImage} show={show} key={photo.id} {...photo}/>
      })}
        </div>
      </div>
    </>
  )
}

export default Photos
