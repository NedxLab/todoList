import React from 'react'
import { FaPen, FaPlus, FaTrash} from "react-icons/fa"

const DeleteItem = ({ deleteItem, state, clearList,editItem, setState}) => {
  return (
   <>
   <div className="d-flex justify-content-center">
        <ul className='list-group m-5 w-50'>
            <h3 className='text-center text-decoration-underline'>Todo Lists</h3>
          
            { state.items[0] ? state.items.map((items)=>(
                <li className="d-flex justify-content-between text-capitalize" key={items.id}>
                <div className="title text-capitalize">
                    <h4>{items.item}</h4>
                    
                </div>
                <div className="icon">
                    <span onClick={()=>editItem(items.id)} className="text-success">
                        <FaPen/>
                    </span>
                    <span onClick={()=>deleteItem(items.id)} className="text-danger mx-2">
                        <FaTrash/>
                    </span>
                </div>
            </li>
            )) : <h1 className='d-flex justify-content-center align-items-center' style={{height:"100px"}}>No Items in the List</h1>}
            
            <button onClick={clearList} className="btn btn-block btn-danger my-3">Clear List</button>
        </ul>
    </div>   
   </>
  )
}

export default DeleteItem