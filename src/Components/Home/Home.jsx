import React from 'react'
import Banner from '../Banner/Banner'
import { NavLink, useLoaderData } from 'react-router-dom'
import ServiceCard from '../ServiceCard/ServiceCard';
import FeedBack from '../FeedBack/FeedBack';

export default function Home() {
  const fetchedData = useLoaderData();
  const { servicesData: services, feedbackData } = fetchedData;


  return (
    <div className='w-10/12 mx-auto'>
      <Banner></Banner>
      <h1 className='mt-20 text-center text-4xl font-bold mb-10'>Services</h1>
      <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-2 '>
        {
          services.slice(0, 4).map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
        }
      </div>
      <NavLink to='/all-treatments'><button className="btn btn-primary hover:bg-blue-600 hover:border-white hover:font-bold mx-auto block my-10">Show All Treatment</button></NavLink>
      <FeedBack feedbackData={feedbackData}></FeedBack>
    </div>
  )
}
