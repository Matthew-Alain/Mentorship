import React, {useState, createElement} from 'react'
import CreatedTask from './CreatedTask.jsx'


function NewTask(){    
    function CreateTask(){
        const text = document.getElementById('newTaskText').value;
        // console.log(text)

        const newTaskElement = createElement(CreatedTask, {taskName: text});

        return <div>{newTaskElement}</div>
    }

    return(
        <tr>
            <td>
                <input id="newTaskText" defaultValue="Input Text"></input>
            </td>
            <td>
                <button onClick={CreateTask}>Add Task</button>
            </td>
        </tr>
    );
}
export default NewTask