import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ServiceCard from '../ServiceCard/ServiceCard';


export default function AllTreatment() {
  const services = useLoaderData();
  return (
    <div className='w-10/12 mx-auto mb-10'>
      <h1 className='my-6 text-center text-4xl font-bold '>Services</h1>
      <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-2 '>
        {
          services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  )
}
