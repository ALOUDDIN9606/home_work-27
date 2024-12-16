import React from 'react'
import image1 from '@/assets/images/photo2.png'
import image2 from '@/assets/images/Paste image.png'
import image3 from '@/assets/images/register.png'
import image4 from '@/assets/images/login.png'
import { Link } from 'react-router-dom'
import { IoArrowForwardOutline } from "react-icons/io5";

const data = [
    {
        id: 1,
        title: 'Novimber Outfits',
        image: image1
    },
    {
        id: 2,
        title: 'Cashmere Set',
        image: image2
    },
    {
        id: 3,
        title: 'The New Nordic',
        image: image3
    },
    {
        id: 4,
        title: 'The Leather',
        image: image4
    }
]

const Collection = () => {
  return (
    <div className='py-12 container grid grid-cols-2 gap-6'>
        {
            data.map(item => (
                <div key={item.id} className='h-[664px] border-2 relative'>
                    <img src={item.image} className='absolute w-full h-full' alt="" />
                    <div className='absolute left-12 bottom-12 text-white'>
                        <p className='text-[34px] font-medium mb-3'>{item.title}</p>
                        <Link className="flex items-center gap-3 text-[16px] relative group" to="/">
                            <span>Collection</span>
                            <IoArrowForwardOutline />
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-[100px]"></span>
                        </Link>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Collection

