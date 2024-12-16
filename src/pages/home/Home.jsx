import Brands from '@/components/brands/Brands'
import Category from '@/components/category/Category'
import Collection from '@/components/collection/Collection'
import Hero from '@/components/hero/Hero'
import Products from '@/components/products/Products'
import { useFetch } from '@/hooks/useFetch'
import React from 'react'

const Home = () => {
  const {data,error,loading} = useFetch("/product/get")
  const {data: catigories} = useFetch("/product-category/get")
  return (
    <div>
      <Hero/>
      <Brands/>
      <Products title= {{name: "Just In" , style: ""}} style={{parent: "flex gap-3 overflow-auto", child: ""}} isAdmin={false} data={data}/>
      <Category data={catigories}/>
      <Collection />
      {/* <Products isAdmin={false} data={data}/> */}
    </div>
  )
}

export default Home
