import React, { useContext } from 'react'
import UserContext from './component/UserContext'
export default function Profile() {
    const {user} = useContext(UserContext);
  return (
    <div>
      <h1>Welcome {user}</h1>
    </div>
  )
}



