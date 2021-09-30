
import './App.css';
import styled from "styled-components";
import { useState } from 'react';
import Cards from './Cards';
import { v4 as uuidv4 } from 'uuid';



const StyledBar = styled.section`
background: white;
width: auto;
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
text-align: left;
input{
  margin-bottom: 1rem;
  width: 40%;
  height: 2rem;
  border-radius: 5px;
}
textarea{
  max-width: 90%;
  border-radius: 5px;
  
}
button{
  min-width: 100px;
  width: 20%;
  margin: 1rem 9% 0 auto;
  color: white;
  background-color: teal;
  border: none;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  font-size: .8rem;
  padding: 5px 10px;
  border-radius: 4px;
}
label{
  font-size: .9rem;
  font-weight: bold;
}
`;

const CardSection = styled.section`
display: flex;
justify-content: space-evenly;
flex-direction: row;
flex-wrap: wrap;


width: 70%;
margin: auto;
`;

const StyledDiv = styled.div`
text-align: left;
margin-top: 3rem;
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
    setTodoData({title: "", todo: ""})
   
  }
  return (
    <div className="App">
     <>
      <StyledBar><h1>Tores todos</h1><h3>User User</h3></StyledBar>
      <StyledInputSection>
        <StyledForm onSubmit={handleSubmit} method="post" action="#">
          <label htmlFor="title">Tittel</label>
          <input placeholder="Tittel" id="title" name="title" type="text" value={todoData.title} onChange={handleTodoData}/>
          <label htmlFor="todo">Content</label>
          <textarea id="todo" rows="5" name="todo" columns="50" placeholder="Skriv inn det du må huske" value={todoData.todo} onChange={handleTodoData}/>
          <button type="submit">Add</button>

          </StyledForm> 
          {todoList?.length > 0 ? (
          <StyledDiv>
          <h2>My todos</h2>
          <p>You have got {todoList.length} todo(s)</p>
          </StyledDiv>
        ) : <StyledDiv><h2>No Todos</h2></StyledDiv>}
      </StyledInputSection>
      
      <CardSection>
        <Cards todoList={todoList} setTodoList={setTodoList}/>
      </CardSection>
     </>
    </div>
  );
}

export default App;
