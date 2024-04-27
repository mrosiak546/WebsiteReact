import React from 'react'

const ShoppingHeader = ({showTodoTable, showDoneTable}) => {
  return (
    <div className='table-header-container'>
    <div>
      <h3>Product List</h3>
    </div>

  <div className='table-header-buttons-container'>
      <button className='table-header-button' onClick={showTodoTable}>View Need</button>
      <button className='table-header-button' onClick={showDoneTable}>View Bought</button>
    </div>
  </div>
  )
}

export default ShoppingHeader
