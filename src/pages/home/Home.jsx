import Brands from '@/components/brands/Brands'
import Category from '@/components/category/Category'
import Collection from '@/components/collection/Collection'
import Hero from '@/components/hero/Hero'
import Latest from '@/components/latest/Latest'
import Lower from '@/components/lower/Lower'
import Products from '@/components/products/Products'
import Vedio from '@/components/vedio/Vedio'
import { useFetch } from '@/hooks/useFetch'
import React from 'react'

const Home = () => {
  const {data,error,loading} = useFetch("/product/get")
  const {data: catigories} = useFetch("/product-category/get")
  
  return (
    <div>
      <Hero/>
      <Brands/>
      <Products title= {{name: "Just In" , style: ""}} style={{parent: "flex gap-3 overflow-auto", child: "w-full min-w-[262px]"}} isAdmin={false} data={data}/>
      <Category data={catigories}/>
      <Collection />
      <Products title= {{name: "Best seller" , style: "text-center"}} style={{parent: "grid grid-cols-4 gap-6", child: ""}} isAdmin={false} data={data}/>
      <Lower />
      <Vedio />
      <Latest />
    </div>
  )
}

export default Home
