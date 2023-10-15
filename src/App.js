import React, {useState,useEffect} from 'react';
import './App.css';
// importing component
import Form from "./components/Form"
import ToDoList from './components/ToDoList';


function App() {
  

  //states 
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(() => {
    const todoLocal = JSON.parse(localStorage.getItem("todos"));
    return todoLocal || [];
  });
  const [status,setStatus] =useState(["all"]);
  const [filteredTodos, setFilteredTodos]=useState([]); 

  //USE E4FFECT
  //  useEffect(()=>{
  //   console.log('hey useeffect');
  //  }
  //  /* this empty array means the arrow functionm  run 
  //  only once when the app runs at the start*/
  //  ,[todos]);
  

  // run once when tha app starts
  useEffect ( ()=>{
    getLocalTodos();
  },
  []
  );

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },
  [todos, status]
  );


  //functiomn and event handlers
  const filterHandler = ()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=> todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=> todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
//SAVE TO LOCAL STORAGE
const saveLocalTodos = () =>{
  console.log('Before saving to local storage');
  localStorage.setItem("todos", JSON.stringify(todos));
  console.log('After saving to local storage');
}

const getLocalTodos = () =>{
  console.log('Before retrieving from local storage');
  const storedTodos =localStorage.getItem("todos");

  if(storedTodos===null || storedTodos===""){
    localStorage.setItem("todos", JSON.stringify([]));
    console.log('Initializing an empty array in local storage');
  }else{
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal);
    console.log('Parsing data from local storage', { todos });
  }
  console.log('After retrieving from local storage');
};

  return (
    
    <div className="App">
      <header>
        <h1>
            Srijan's To DO list 
        </h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      
      <ToDoList 
        todos={todos} 
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
