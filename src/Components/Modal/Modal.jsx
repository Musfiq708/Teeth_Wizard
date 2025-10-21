import React from 'react'

export default function Modal() {
  const handleSubmit = (e) => {
    e.preventDefault();


  }
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
      <dialog id="my_modal_5" className="modal  ">
        <div className="modal-box">
          <form onSubmit={handleSubmit} action="">
            <fieldset className="">
              <legend name="fname" className="fieldset-legend">First Name:</legend>
              <input type="text" className="input w-full" placeholder="Enter your first name" />
            </fieldset>
            <fieldset className="">
              <legend className="fieldset-legend">Last Name:</legend>
              <input name='lname' type="text" className="input w-full" placeholder="Enter your Last name" />
            </fieldset>
            <fieldset className="">
              <legend className="fieldset-legend">Email Address:</legend>

              <input name='email' type="email" className="input w-full" placeholder="mail@gmail.com" />
            </fieldset>
            <fieldset className="">
              <legend className="fieldset-legend">Phone Number:</legend>
              <input name='pnumber' type="number" className="input w-full" placeholder="Enter your Phone Number" />
            </fieldset>
            <fieldset className="">
              <legend className="fieldset-legend">Appointment Date:</legend>
              <input name='date' type="date" className="input w-full" />
            </fieldset>
            <fieldset className="">
              <legend className="fieldset-legend">Address:</legend>
              <input name='address' type="text" className="input w-full" placeholder="Enter your Current Address" />
            </fieldset>
            <button className="btn btn-primary hover:bg-blue-600 hover:border-white hover:font-bold mx-auto block mt-4">Make Appointment</button>
            <p className="py-4 text-center text-xl font-semibold text-gray-400">Press ESC key  to close</p>
          </form>
        
        </div>
        
      </dialog>
    </div>
  )
}
