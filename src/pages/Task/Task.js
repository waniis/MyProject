import { addTask } from "../../Api/TaskApi";
import TaskForm from './TaskForm';


const Task = () => {

// let history = useHistory();
const initialValues = { 
    task_name :'',
    assigness  : '',  
    priority:'',
    due_date: '',
}


const onSubmit = (values, submitProps) => {
  console.log('Form data', values)
  addTask(values).then(res => {
    console.log(values);
    console.log(res.data);
    alert(res.data);
     
     })
     .catch(error=>{
      alert(error);
  });

  submitProps.setSubmitting(false)
  submitProps.resetForm();
  
  // history.push("/product") ;
} 
  return (
    <div>

    <TaskForm initialValues={initialValues} onSubmit={onSubmit} > </TaskForm>
    
    </div>
  )
}

export default Task
