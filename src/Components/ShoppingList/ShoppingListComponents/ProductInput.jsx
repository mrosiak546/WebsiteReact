import React from 'react'

const TodoInput = ({newTodo, setNewTodo, priority, setPriority, handleAdd}) => {

    const handleChange = (e) => {
        setNewTodo(e.target.value)
    }

    const handlePriority = (e) => {
        setPriority(e.target.value)
    }

    const handleSubmit = () => {
        handleAdd(newTodo, priority)
    }

  return (
    <div className='inputs-container'>
    <div className='todo-container'>
        <div className='todo-input-container'>
          <label>Product</label>
          <input type='text' value={newTodo} onChange={handleChange}/>
        </div>

        <div className='todo-priority-container'>
          <label>Priority</label>
          <select value={priority} onChange={handlePriority}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
    </div>

    <button className='add-todo-button' onClick={handleSubmit}>Add Todo</button>
</div>
  )
}

export default TodoInput
