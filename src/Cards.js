import styled from 'styled-components';

const StyledCardSection = styled.section`
background: white;
display: flex;
justify-content: space-around;
flex-direction: column;
text-align: left;
padding: 0 1rem;
margin: 1rem auto;
width: auto;
min-width: 200px;
box-shadow: 3px 6px 10px lightgrey;

h3{
  font-size: 1rem;
  padding: 0;
  margin: 5px;
}
p{
  font-size: .8rem;
  padding: 5px;

}
button{
  cursor: pointer;
  width: auto;
  margin: 5px 0 15px auto;
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
button:hover{
  opacity: .8;
}
`;

const Cards = ({todoList, setTodoList}) => {

  const removeItem = (randomNum) => {
    const newList = todoList.filter((items) => items.randomNum !== randomNum);
    setTodoList(newList);
  };
return(
    <>

    {todoList?.length > 0 ? (
        todoList.map((items, i) => (
        <StyledCardSection key={items.randomNum}>
          <h3>{items.title}</h3>
          <p> {items.todo}</p>
          <button type="button" onClick={() => removeItem(items.randomNum)}>
                Completed
              </button>
        </StyledCardSection>
        ))
      ) : null}

  
    
    </>
)
}

export default Cards;