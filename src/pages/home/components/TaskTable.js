import React, { useEffect, useState } from 'react'
import { getTasks } from '../../../Api/TaskApi';
import TaskDetails from './TaskDetails';

const TaskTable = () => {

    const [tasks, setTasks] = useState([])   


    const  [key, setKey] = useState("")

    useEffect(() => {
           console.log("component did mount");

           getTasks().then(response => {
            setTasks(response.data)
           })

           .catch(error=>{
               alert(error);
           });

    }, []) 
  console.log(tasks);

  function handleChange(e) {
  setKey(e.target.value);
  }



    return (
        <div>

  <input className="form-control me-2" type="search" onChange={handleChange} placeholder="Search" aria-label="Search"/>

            <table className="table" style={{marginTop:90}}>
  <thead>
    <tr>
      <th scope="col">Task Name</th>
      <th scope="col">Assignees</th>
      <th scope="col">Priority</th>
      <th scope="col">Due Date</th>
    </tr>
  </thead>

  <tbody>


  { (tasks.filter((s => s.Task_name.includes(key)))).length > 0 ? (tasks.filter((s => s.Task_name.includes(key)))).map(task=>
            <>
            <TaskDetails  task={task} ></TaskDetails>  
            </>         
          )  : 'rien'}
   
   
  </tbody>
</table>
        </div>
    )
}

export default TaskTable
