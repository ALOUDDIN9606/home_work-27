import React from 'react'
import img1 from '@/assets/images/cg2.png'
import img2 from '@/assets/images/cg3.png'
import img3 from '@/assets/images/cg4.png'
import img4 from '@/assets/images/cg6.png'

const urls = [img1, img2, img3, img4, img2, img1, img3]

const Category = ({data}) => {
  console.log(data);
  return (
    <div className='container'>
        <p className='text-center mb-12 text-[40px] font-semibold'>Shop By Category</p>
        <div className='flex flex-wrap gap-6'>
            {
                data?.map((item, inx) => (
                    <div key={item.id} className='text-center'>
                        <img src={urls[inx]} className='w-[167px] h-[167px] rounded-full' alt="" />
                        <p className='mt-3 font-semibold text-sm'>{item.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Category

