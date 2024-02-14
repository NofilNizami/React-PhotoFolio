import React from 'react'

const Button = ({content}) => {
  return (
    <>
      <button className='btn py-2 fs-5 text-white px-5' style={{ background: '#27A776' }}>
        {content}
      </button>
    </>
  )
}

export default Button
