
import { useEffect, useState } from 'react'


function Form() {
    const [newTodo,setNewTodo] =useState("")
    const [todos,setTodos] =useState([])
    const [filteredTodos,setFilteredTodos] =useState([])
    const [option,setOption] =useState("")

    useEffect(() => {
        setFilteredTodos([...todos])
    } , [newTodo,setNewTodo,todos])

    const addTodos= (e) => {
        e.preventDefault()
        if(newTodo !=="" ){
            setTodos([...todos , {text: newTodo , completed:false}]) 
        }
        setNewTodo("")
    }

    const Completed = (todo) => {
        todos.map(t => t.text === todo.text ? t.completed=!t.completed : todo )
        setTodos([...todos])
    }

    const Deleted = (todo) => {
        setTodos([...todos.filter(t => t.text !==todo.text)])
    }

    const filterTodos = (e) => {

        if(e.target.value==="Hepsi"){
            setFilteredTodos([...todos])
        }else if(e.target.value==="Yapılanlar"){
            setFilteredTodos(todos.filter((todo) => todo.completed===true))
        }else if(e.target.value==="Yapılmayanlar"){
            setFilteredTodos(todos.filter((todo) => todo.completed===false))
        }
    }

    return (
        <>
            <form onSubmit={(e)=> addTodos(e)} className="input-container">
                <div className="giris-input">
                    <input 
                        value={newTodo}
                        type="text" 
                        className="kullanici-input" 
                        placeholder="Birşeyler Ekle..."
                        onChange={(e) => setNewTodo(e.target.value)}
                        />
                    <button className="ekle-btn" type="submit"><i className="ri-add-circle-fill"></i></button>
                </div>
            </form>
            <select className="goster" onChange={filterTodos}>
                <option value="Hepsi">Hepsi</option>
                <option value="Yapılanlar">Yapılanlar</option>
                <option value="Yapılmayanlar">Yapılmayanlar</option>
            </select>
            <hr></hr>
            <ul className="todos-container">
                  {
                    filteredTodos === [] ?   null  :           
                     (
                        filteredTodos.map((todo,idx) => (
                            <li className="todo-item" key={idx}>
                            <button className={`ri-check-line completed-btn `} onClick={()=>Completed(todo)} ></button>
                            <label className={todo.completed ? "todo-input completed" : "todo-input"}>{todo.text}</label>
                            <button className="ri-delete-bin-6-line delete-btn" onClick={()=> Deleted(todo)}></button>
                            </li>
                        ))
                     )
                  }
             </ul>
                
        </>
      )
  }


export  {Form}