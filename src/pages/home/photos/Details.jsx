import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { photoss } from './data';

const Details = () => {
    const {id} = useParams();
    const foundItem = photoss.find((photo)=>{
        return photo.id == id;
    })
  return (
    <>
    <div className="container flex-column mt-5 mx-auto d-flex align-items-center justify-content-center">
      <div className="col-lg-8 col-md-10">
      <img className='mx-auto mb-4 rounded d-flex' width={'60%'} src={foundItem.image} alt="" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt soluta quasi nesciunt itaque blanditiis, praesentium veniam corporis delectus pariatur incidunt voluptatum tenetur quos totam harum dolor culpa repellendus repudiandae non? Veritatis dolor voluptatibus recusandae, iste commodi modi tempore ut. Consectetur repudiandae possimus numquam, pariatur dolorem expedita ex repellat facere unde, autem labore, dolorum accusantium laudantium amet aspernatur ea officiis optio! Provident aperiam unde, itaque recusandae nihil est inventore id voluptate vero, reiciendis saepe rem assumenda placeat nobis, molestias culpa ab!</p>

      <Link to={`/`}>

      <button className='btn btn-primary d-block  w-50 px-5 mx-auto'>Go Back</button>
      </Link>
    </div>

      </div>
    </>
  )
}

export default Details
