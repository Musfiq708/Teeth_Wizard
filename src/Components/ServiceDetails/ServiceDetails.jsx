import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Modal from '../Modal/Modal';

export default function ServiceDetails() {

    const singleData = useLoaderData();
    const { treatment, image, description, cost } = singleData;
    console.log(singleData)


    return (
        <div
            className="w-10/12 mx-auto hero min-h-screen my-10 rounded-2xl"
            style={{
                backgroundImage:
                    `url(${image})`,
            }}
        >
            <div className="hero-overlay rounded-2xl"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="w-8/12">
                    <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
                    <p className="mb-5">
                        {description}
                    </p>
                    <p className='bg-blue-600 text-white p-4 w-fit mx-auto rounded-4xl text-xl font-bold border-3 border-blue-300 hover:shadow-2xl hover:shadow-blue-300'>${cost} </p>
                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-primary hover:bg-blue-600 hover:border-white hover:font-bold mt-5">Book Appointment</button>
                </div>
            </div>
            <Modal></Modal>
            {/*Modal will work anywhare if you add this in a parents component*/}
        </div>
    )
}
