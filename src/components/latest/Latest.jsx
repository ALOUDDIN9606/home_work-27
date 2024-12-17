import React from 'react'
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import img1 from '@/assets/images/img.png'
import img2 from '@/assets/images/img (1).png'
import img3 from '@/assets/images/img container.png'

const data = [
    {
        id: 1,
        img: img1,
        title: '2023 Holiday Gift Guide'
    },
    {
        id: 2,
        img: img2,
        title: '2023 Eco-Friendly Fashion Trends'
    },
    {
        id: 3,
        img: img3,
        title: '2023 Fashion Trends for Men and Women'  
    }
]


const Latest = () => {
  return (
    <div className='container pt-16'>
        <div className='flex flex-wrap items-center justify-between pb-10'>
            <h2 className='text-[40px]'>Latest Articles</h2>
            <Link className="flex items-center gap-3 text-[16px] relative group" to="/">
                <span className='text-[18px]'>View more</span>
                <IoArrowForwardOutline />
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-[110px]"></span>
            </Link>
        </div>
        <div className='pb-20'>
            <div className='grid grid-cols-3 gap-6'>
                {
                    data?.map((item) => (
                        <div key={item.id} className=''>
                            <img className='w-full h-full object-cover' src={item.img} alt={item.title} />
                            <h3 className='text-sm text-gray-500 py-3'>{item.title}</h3>
                            <Link className="flex items-center gap-3 text-[16px] relative group" to="/">
                                <span className='text-[18px]'>Read More</span>
                                <IoArrowForwardOutline />
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-[110px]"></span>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Latest