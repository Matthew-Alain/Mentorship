import React, {useState} from 'react'

function CreatedTask({taskName}){

    const [show, setShow] = useState(true);
    const [completed, setCompleted] = useState(false);
    const [task, setTask] = useState(taskName);
    const [id, setId] = useState("incomplete");

    function markAsCompleted(){
        setCompleted(!completed)
        if(completed){
            setId("complete");
        }else{
            setId("incomplete");
        }
    }

    function deleteTask(){
        setShow(false);
    }

    return(
        <tr id={id}>
            <td>
                {show && task}
            </td>
            <td>
                {show && <button onClick={markAsCompleted}>Complete</button>}
            </td>
            <td>
                {show && <button onClick={deleteTask}>Delete</button>}
            </td>
        </tr>
    );
}

export default CreatedTask