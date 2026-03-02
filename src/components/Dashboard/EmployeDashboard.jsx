import React from 'react'
import Header from '../others/Header'
import TaskListNum from '../others/TaskListNum'
import TaskList from '../TaskList/TaskList'

const EmployeDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header />
      <TaskListNum />
      <TaskList />

    </div>
  )
}

export default EmployeDashboard
