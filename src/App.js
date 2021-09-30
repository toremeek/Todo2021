
import './App.css';
import styled from "styled-components";
import { useState } from 'react';
import Cards from './Cards';
import { v4 as uuidv4 } from 'uuid';



const StyledBar = styled.section`
background: white;
width: 90%;
color: black;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0 2rem 0 2rem;
margin: 3rem auto;
box-shadow: 0px 7px 10px rgba(0,0,0,0.2);
`;

const StyledInputSection = styled.section`
width: 70%;
margin: 6rem auto;
`;

const StyledForm = styled.form`
display: flex;
justify-content: space-around;
flex-direction: column;
margin: auto;
input{
  margin-bottom: 1rem;
  width: 50%;
  height: 2rem;
  border-radius: 5px;
}
textarea{
  width: 100%;
  border-radius: 5px;
}
`;

function App() {

  const [todoData, setTodoData] = useState({title: "", todo: ""});
  const [todoList, setTodoList] = useState([]);
  const randomNum = uuidv4();
  
  const handleTodoData = (event) => {
  const value = event.target.value;
  setTodoData({
   ...todoData,
   [event.target.name]: value,
   randomNum
 });

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, {...todoData}]);
   
  }
  return (
    <div className="App">
     <>
      <StyledBar><h1>Tores todos</h1><h3>User User</h3></StyledBar>
      <StyledInputSection>
        <StyledForm onSubmit={handleSubmit} method="post" action="#">
          <label htmlFor="title">Tittel</label>
          <input placeholder="Tittel" id="title" name="title" type="text" value={todoData.title} onChange={handleTodoData}/>
          <label htmlFor="todo">Din Todo</label>
          <textarea id="todo" rows="5" name="todo" columns="50" placeholder="Skriv inn det du må huske" value={todoData.todo} onChange={handleTodoData}/>
          <button type="submit">Add</button>

          </StyledForm> 
      </StyledInputSection>
      <section>
        <Cards todoList={todoList} setTodoList={setTodoList}/>
      </section>
     </>
    </div>
  );
}

export default App;
