import React, { useContext } from 'react'
import {useState}  from 'react'
import { AuthContext } from '../../context/AuthProvider'
import Login from '../Auth/Login'

const CreateTask = () => {
const [taskTitle, setTaskTitle] = useState('')
const [taskDate, setTaskDate] = useState('')
const [assignTo, setAssignTo] = useState('')
const [category, setCategory] = useState('')
const [taskDescription, setTaskDescription] = useState('')

const [userData, setUserData] = useContext(AuthContext)

// const [newTask, setNewTask] = useState({})

  const formHandler = (e) => {
  e.preventDefault()

  const task = {
    taskTitle,
    taskDescription,
    taskDate,
    category,
    active: true,
    failed: false,
    completed: false
  }

  const updatedEmployees = userData.employees.map(emp => {

    if (assignTo === emp.firstName) {
      return {
        ...emp,
        tasks: [...emp.tasks, task]
      }
    }

    return emp
  })

  setUserData(prev => ({
    ...prev,
    employees: updatedEmployees
  }))
  
  localStorage.setItem("employees", JSON.stringify(updatedEmployees))

}
    


    // setTaskTitle('')
    // setTaskDate('')
    // setAssignTo('')
    // setCategory('')
    // setTaskDescription('')


  return (
    <div>
      <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form 
        onSubmit={(e)=>{formHandler(e)}}
        className='flex  flex-wrap justify-between w-full items-start'>
          <div className='w-1/2'>
            <div>
              <h3 className='text-sm text-gray-200 mb-0.5 '>Task Title</h3>
              <input 
              value={taskTitle} onChange={(e)=>{ setTaskTitle(e.target.value) }}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Create New Task' />
            </div>
            <div>
              <h3 className='text-sm text-gray-200 mb-0.5'>Date</h3>
              <input
              value={taskDate} onChange={(e)=>{ setTaskDate(e.target.value) }}
               className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
            </div>

            <div>
              <h3 className='text-sm text-gray-200 mb-0.5'>Assign to</h3>
              <input 
              value={assignTo} onChange={(e)=>{ setAssignTo(e.target.value) }}
              
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employe Name' />
            </div>
            <div>

              <h3 className='text-sm text-gray-200 mb-0.5'>Category</h3>
              <input 
              value={category} onChange={(e)=>{ setCategory(e.target.value) }}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design, dev etc..' />

            </div>
          </div>
          <div className='w-2/5 flex flex-col items-start '>

            <h3 className='text-sm text-gray-200 mb-0.5'>Description</h3>
            <textarea 
            value={taskDescription} onChange={(e)=>{ setTaskDescription(e.target.value) }}
            className='w-full h-44  text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]  border-gray-400' name="" id="" cols="30" rows="10"></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full '>Create Task</button>
          </div> 
        </form>
      </div>
    </div>
  )
}

export default CreateTask
