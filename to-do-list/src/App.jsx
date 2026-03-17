import { useState } from 'react'
import CreatedTask from './CreatedTask.jsx'
import NewTask from './NewTask.jsx'
import './index.css'

function App() {

  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
          <NewTask/>
          <CreatedTask taskName = "Default Task"/>
      </tbody>
    </table>

)
}

export default App