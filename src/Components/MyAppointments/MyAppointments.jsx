import React, { useContext } from 'react'
import { authContext } from '../AuthProvoder/AuthProvider'

export default function MyAppointments() {
const contextValue = useContext(authContext);
console.log(contextValue)
  return (
    <div>
      All my appointments is here
    </div>
  )
}
