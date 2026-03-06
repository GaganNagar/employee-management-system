import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    return (
        <div id='tasklist' className='flex items-center justify-start gap-5 flex-nowrap h-[55%] overflow-x-auto py-5 w-full mt-10'>

            {data.tasks.map((elem)=>{
                if(elem.active){
                    return <AcceptTask />
                }
            })}

        </div>
    )
}

export default TaskList
