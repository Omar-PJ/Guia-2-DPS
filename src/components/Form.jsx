import React,{useState} from 'react'
import Todo from '../components/Todo'

const Form = () => {
    const[todo,setTodo]=useState({})
    const[numer,setnumer]=useState({})
    const[todos, setTodos]=useState([
        {numer: '1 ', todo:'Manzana'},
        {numer: '2 ', todo:'Pera'}
    ])
const handleChange2= e => setnumer({[e.target.name]:e.target.value})
const handleChange= e => setTodo({[e.target.name]:e.target.value})
const handleClick = e => {
    if(Object.keys(todo).length === 0 || todo.todo.trim() === '' || Object.keys(numer).length === 0 || numer.numer.trim() === '' )
    {
        alert('El campo no puede estar vacio')
    }
    const list= todos.concat(numer, todo);
    alert("El error es "+ list)
    setTodos([...todos,list])
}
const deleteTodo = indice => {
    const newTodos=[...todos]
    newTodos.splice(indice,1)
    setTodos(newTodos)
}

return (
    <>
    <form onSubmit={e => e.preventDefault()}>
        <label> Compras </label><br />
        <input type="text" name="todo" onChange={handleChange}/>
        <input type="text" name="numer" onChange={handleChange2}  />
        <button onClick={handleClick}>Agregar</button>
    </form>
    {
    todos.map((value, index) => (
        <Todo numero={value.numer} todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>))
    }
    </>
)
}
export default Form