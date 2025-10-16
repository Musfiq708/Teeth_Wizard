import React from 'react'
import Banner from '../Banner/Banner'
import { useLoaderData } from 'react-router-dom'
import ServiceCard from '../ServiceCard/ServiceCard';

export default function Home() {
  const services = useLoaderData();


  return (
    <div className='w-10/12 mx-auto'>
      <Banner></Banner>
      <div className='mt-20'>
        <h1 className='text-center text-4xl font-bold mb-10'>Services</h1>
        {
          services.map(service =><ServiceCard key={service.id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  )
}
