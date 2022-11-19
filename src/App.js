
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import AddItem from './AddItem';
import DeleteItem from './DeleteItem';
import { useState, useEffect } from 'react';

function App() {
  var uniqueId = Math.random() * 100000;
    
    const [state, setState] = useState(JSON.parse(localStorage.getItem('state')) || {
      items: [],
      item: "",
      edit: false
  })
    
    const handleAdd = (e) => {
        
        e.preventDefault();
        const newItem = {
            id: uniqueId,
            item: state.item,
            edit: false
        }
        const UpdatedItems = [...state.items, newItem]
        setState({
            items: UpdatedItems,
            id: uniqueId,
            item: "",
            edit: false
        })
       
    };
    const handleChange = (e) => {
        setState({
            items: [...state.items],
            item: e.target.value
        })
    }

    const clearList = ()=>{
      setState({ 
        items: [],
        item: "",
        edit: false
      });
    }

    const deleteItem = (id)=>{
      const newArray = state.items.filter(item=> 
      item.id !== id
      )
      setState({ 
        items: newArray,
        item: "",
        edit: false
      });
      
    }
    const editItem = (id)=>{
      const selectedItem = state.items.find(item=>item.id == id)
      const newArray = state.items.filter(item=> 
        item.id !== id
        )
        setState({ 
          items: newArray,
          item: selectedItem.item,
          edit: true
        });
    };
    useEffect(()=>{
      localStorage.setItem("state", JSON.stringify(state));
    },[state])
  return (
    <>
    <div className="mt-5 card card-body">
    <AddItem
    handleAdd = {handleAdd}
    handleChange = {handleChange}
    state = {state}
    setState = {setState}
    />
    <DeleteItem
    editItem = {editItem}
    deleteItem = {deleteItem}
    clearList = {clearList}
    state = {state}
    setState = {setState}
    />
    </div>
    </>
  );
}

export default App;
