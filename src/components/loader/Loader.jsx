import React, { useEffect, useRef } from 'react'
import './loader.css'
const Loader = () => {
    const left = useRef();
    const right = useRef();
    const line = useRef();

    const move = () => {
        left.current.style.transform = 'translateX(-100%)';
        right.current.style.transform = 'translateX(100%)'
    }

    const increaseline = ()=>{
      line.current.style.height = '100%'
        line.current.style.opacity = '0'
    }

    useEffect(() => {
      setTimeout(increaseline, 1000);
      return clearTimeout(increaseline, 1000);
    }, []);

    useEffect(()=>{
        setTimeout(move, 1500);

        return clearTimeout(move, 1500)
    }, [])
  return (
    <>
    <div className="loader">
      <div ref={left} className="bg-loader"></div>
      <div ref={line} className="line"></div>
      <div ref={right} className="bg-loader second"></div>
    </div>
    </>
  )
}

export default Loader
