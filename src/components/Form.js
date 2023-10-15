import React from "react";

// function Form (props){ does the asame work but down one is simplipler than useing props
function Form ({inputText, setInputText,todos, setTodos,setStatus}){
    //here i can wrtie js codes and function
    const inputTextHanderler= (e)=>{
        setInputText(e.target.value);
    };
    
    const submitTodoHandler=(e)=>{
      e.preventDefault();
      setTodos([
        ...todos, 
        {
          text: inputText, 
          completed: false, 
          id : Math.random() * 1000}
      ]);
      setInputText("");
    };

    const statusHandler =(e)=>{
      console.log(e.target.value);
      setStatus(e.target.value);
    }

    return(
    <form>
      <input 
        value={inputText} 
        onChange={inputTextHanderler} 
        type="text" 
        className="todo-input" 
      />
      <button 
        onClick={submitTodoHandler} 
        className="todo-button" 
        type="submit"
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    ); 
};
export default Form