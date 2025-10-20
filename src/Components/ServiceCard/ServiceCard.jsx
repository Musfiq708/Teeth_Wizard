import React from 'react'
import { NavLink } from 'react-router-dom';


export default function ServiceCard({ service }) {
  
    const { image, treatment, description, cost,id } = service;
    return (
        <div className='grid grid-flow-col '>
            <div className="card bg-blue-100  shadow-sm">
                <figure className="px-4 pt-4">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl   " />
                </figure>
                <div className="card-body items-center text-center mb-0">
                    <div className='flex items-center gap-5'>
                        <h2 className="card-title">{treatment}</h2>
                        <button className='text-sm py-1 px-2 rounded-full bg-pink-500 text-white '>{cost}$</button>
                    </div>
                    <p title={description}>{description.slice(0, 120)}...</p>

                    <div className="card-actions">
                        <NavLink to={`/service-details/${id}`}><button className="btn btn-primary hover:bg-blue-600 hover:border-white hover:font-bold">Checkout More</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
