import React from 'react'

const TaskDetails = (props) => {

 function casting(str)
 {
switch (str) {
    case 1:
        return "Critical";
        break;

        case 2:
            return "Hight";
            break;

        case 3:
                return "Meduim";
                break;
     
                case 4:
                    return "Low";
                    break;
        


    default:
        break;
}

 }
    return (


        <tr>
        <th scope="row">{props.task.Task_name}</th>
        <td> {props.task.assigness}</td>
        <td> {casting(props.task.Priority)} </td>
        <td> {new Date(props.task.Due_date).toLocaleString ()} </td>
      </tr>
    )
}

export default TaskDetails
