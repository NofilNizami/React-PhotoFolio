import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
      spaceBetween={80}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay ]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="px-3 py-4 shadow reviews d-flex align-items-center justify-content-center text-center flex-column">
                <img className='m-0' src="https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png" alt="" />
                <p>Adipisicing elit. Perferendis, eum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo soluta cum qui nostrum aliquid consequatur.</p>
                <div className="image">
                </div>
                <h2 className='m-0'>Malik Sahab</h2>     
                <h5 className='m-0 text-secondary'><i>Freelancer</i></h5>         
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className="px-3 py-4 reviews d-flex align-items-center justify-content-center text-center flex-column">
                <img className='m-0' src="https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png" alt="" />
                <p>Adipisicing elit. Perferendis, eum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo soluta cum qui nostrum aliquid consequatur.</p>
                <div className="image">
                </div>
                <h2 className='m-0'>Malik Sahab</h2>     
                <h5 className='m-0 text-secondary'><i>Freelancer</i></h5>         
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="px-3 py-4 reviews d-flex align-items-center justify-content-center text-center flex-column">
                <img className='m-0' src="https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png" alt="" />
                <p>Adipisicing elit. Perferendis, eum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo soluta cum qui nostrum aliquid consequatur.</p>
                <div className="image">
                </div>
                <h2 className='m-0'>Malik Sahab</h2>     
                <h5 className='m-0 text-secondary'><i>Freelancer</i></h5>         
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="px-3 py-4 reviews d-flex align-items-center justify-content-center text-center flex-column">
                <img className='m-0' src="https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png" alt="" />
                <p>Adipisicing elit. Perferendis, eum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo soluta cum qui nostrum aliquid consequatur.</p>
                <div className="image">
                </div>
                <h2 className='m-0'>Malik Sahab</h2>     
                <h5 className='m-0 text-secondary'><i>Freelancer</i></h5>         
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="px-3 py-4 reviews d-flex align-items-center justify-content-center text-center flex-column">
                <img className='m-0' src="https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png" alt="" />
                <p>Adipisicing elit. Perferendis, eum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo soluta cum qui nostrum aliquid consequatur.</p>
                <div className="image">
                </div>
                <h2 className='m-0'>Malik Sahab</h2>     
                <h5 className='m-0 text-secondary'><i>Freelancer</i></h5>         
            </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
