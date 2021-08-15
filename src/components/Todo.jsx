import React from 'react'
const Todo = ({numero, todo, index,deleteTodo}) => {
return (
<div className="list">
<h3>{numero}{todo}</h3>
<button className="btn-delete" onClick={() => deleteTodo(index)} > X </button>
</div>
)
}
export default Todo