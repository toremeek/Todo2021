const Cards = ({todoList, setTodoList}) => {
console.log(todoList)
  const removeItem = (randomNum) => {
    const newList = todoList.filter((items) => items.randomNum !== randomNum);
    setTodoList(newList);
  };
return(
    <>
    <h2>Hallo</h2>
    <section>
    {todoList?.length > 0 ? (
        todoList.map((items, i) => (
        <section key={items.randomNum}>
          <h3>{items.title}</h3>
          <p> {items.todo}</p>
          <p>{items.randomNum}</p>
          <button type="button" onClick={() => removeItem(items.randomNum)}>
                Completed
              </button>
        </section>
        ))
      ) : (
        <p>Listen er tom</p>
      )}

    </section>
    
    </>
)
}

export default Cards;