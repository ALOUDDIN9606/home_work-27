import React from 'react'
import img from '@/assets/images/video.png'

const Vedio = () => {
  return (
    <div className='container text-center py-14'>
        <p className='text-[18px] text-blue-600 font-bold'>PROMOTION</p>
        <h2 className='text-[45px]'>Winter Collections</h2>
        <p className='text-[18px] pb-4'>Introducing the new winter jackets.</p>
        <div className='h-[544px]'>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Vedio