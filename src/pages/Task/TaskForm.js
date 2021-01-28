
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import TextError from './TextError'


const TaskForm = (props) => {

// let history = useHistory();
 

const validationSchema = Yup.object({
    task_name: Yup.string().required('Required'),
    assigness : Yup.string().required('we need this fied'),
    priority : Yup.number().required('we need this fied').typeError("num plz"),
    due_date : Yup.date("number pllz").required(' this field too ')
})


  return (
    <div>
      <Formik
      initialValues={props.initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
      enableReinitialize
    >

      {formik => {
        console.log('Formik props', formik)
        return (
          <Form>
            <div className='form-control'>
              <label htmlFor='name'>Task Name </label>
              <Field type='text' id='task_name' name='task_name' />
              <ErrorMessage name='task_name' component={TextError} />
            </div>

            <div className='form-control'>
              <label htmlFor='name'>Assigness</label>
              <Field type='text' id='assigness' name='assigness' />
              <ErrorMessage name='assigness' component={TextError} />
            </div>

            <div className='form-control'>
              <label htmlFor='name'>Priority</label>
              <Field type='number' id='priority' name='priority' />
              <ErrorMessage name='priority' component={TextError} />
            </div>

            <div className='form-control'>
              <label htmlFor='name'>Due date</label>
              <Field type='date' id='due_date' name='due_date' />
              <ErrorMessage name='due_date' component={TextError} />
            </div>


            
            <button type='reset'>Reset</button>
            <button
              type='submit'
            >
              Submit
            </button>
            
            </Form>) }}

    </Formik>
     
     
    </div>
  )
}

export default TaskForm
