import React from 'react'
import Header from '../others/Header'
import TaskListNum from '../others/TaskListNum'
import TaskList from '../TaskList/TaskList'

const EmployeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNum changeUser={props.changeUser} data={props.data}/>
      <TaskList changeUser={props.changeUser} data={props.data}/>

    </div>
  )
}

export default EmployeDashboard
