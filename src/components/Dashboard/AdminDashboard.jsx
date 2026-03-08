import React, { useContext } from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
import { AuthContext } from '../../context/AuthProvider'

const AdminDashboard = (props) => {
  
  // const [userData,setUserData] = useContext(AuthContext)

  return (
    <div className='h-full w-full p-7'>
      <Header changeUser={props.changeUser}/>
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard
