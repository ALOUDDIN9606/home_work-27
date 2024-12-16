import { useFetch } from '@/hooks/useFetch'
import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const {id} = useParams()
  const {data} =  useFetch(`/product/get/${id}`)


  return (
    <div className='container flex flex-wrap flex-col items-center border-2'>
        <p className='bg-slate-500'>Details</p>
        <img className='w-[50%]' src={data?.image} alt="" />
    </div>
  )
}

export default Details