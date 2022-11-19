import React from 'react'
import { FaPen, FaPlus, FaTrash} from "react-icons/fa"


const AddItem = ({ handleAdd, state, handleChange, setState}) => {
   
  return (
    
      <div className="d-flex justify-content-center">
        <form onSubmit={handleAdd}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text" id="icon">
             <FaPlus/>.
            </div>
          </div>
          <input type="text" name="item" 
          value={state.item}
            onChange={handleChange} 
          className=" form-control" placeholder='Add Todo List Item' aria-label='Add item' aria-describedby='Add item' />
        </div>
        <button type='submit' className= {state.edit ? 'btn btn-block w-100 btn-success' : 'btn btn-block w-100 btn-primary'}>
            {state.edit ? 'Edit Item' : 'Add Item'}
        </button>
     </form>
      </div>
  )
}

export default AddItem