import React from 'react'
// Delete icon
import { FaTrash } from 'react-icons/fa'



const ViewBought = ({doneTodos, handleDeleteDone}) => {
  return (
    <div className='table-main-section-container'>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product</th>
              <th>Priority</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {doneTodos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.id.slice(0,8)}</td>
                <td>{todo.name}</td>
                <td 
                  style=
                  {{ color: 
                    todo.priority === 'High' ? 'red' : 
                    todo.priority === 'Medium' ? 'orange' : 
                    'black'
                  }}>
                  {todo.priority}
                </td>
                <td>
                  <FaTrash 
                    className='delete-icon'
                    onClick={() => handleDeleteDone(todo.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default ViewBought