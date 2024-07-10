import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
    const settings = {
      
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  return (
    <div>
      <Slider {...settings}>
      <div className='!flex items-center bg-gray-100 pl-3 '>
        <div >
          <div className='text-6xl font-bold'>Tarzını Keşfet</div>
          <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam delectus quas aspernatur aut deleniti est omnis quaerat vero suscipit cum, rem porro quasi harum? Eos unde dignissimos rerum vel corporis?</div>
          <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>incele</div>
        </div>
        <img src="https://assets.solesense.com/en/images/products/500/converse-golf-le-fleur-x-chuck-70-high-paprika-flame-a08646c_1.jpg"/>
      </div>
      <div className='!flex items-center bg-gray-100 pl-3 '>
      <div >
          <div className='text-6xl font-bold'>Tarzını Keşfet</div>
          <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam delectus quas aspernatur aut deleniti est omnis quaerat vero suscipit cum, rem porro quasi harum? Eos unde dignissimos rerum vel corporis?</div>
          <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>incele</div>
        </div>
        <img src='https://assets.solesense.com/en/images/products/500/converse-golf-le-fleur-x-one-star-ox-airway-blue-159432c_1.jpg'/>
      </div>
      </Slider>
    </div>
  )
}

export default SliderComp
