// todolist
// Controlled Component寫法 + id 為UnControlled Component寫法
import TodoItem from './TodoItem';
import useTodos from "./useTodos";
import TodoTop from "./TodoTop";
import styled from 'styled-components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from './constants/style';

const AppWrapper = styled.div`
width: 600px;
margin-bottom: 30px;
${MEDIA_QUERY_MD} {
  max-width: 500px;
}
${MEDIA_QUERY_SM} {
  width: 100%;
}
`
const ChooseBtnWapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 23px;
`

const ChooseBtn = styled.button`
  background: none;
  color: ${props => props.theme.colors.primary_4};
  border: none;
  border-bottom: 3px solid ${props => props.theme.colors.primary_4};
  font-size: 17px;
  width: 33%;
  padding: 12px 0px 8px 0px;
  &:hover {
    background: ${props => props.theme.colors.primary_3};
    color: ${props => props.theme.colors.primary_1};
  }
`
// func

function App() {
  const {
    todos,
    setTodos,
    id,
    handleBtnClick,
    handleKeyDown,
    handleDeleteTodo,
    handleToggleIsDone,
    value,
    setValue,
    handleChange
  } = useTodos();

  // const handleTotal = () => {
  //   console.log(todos.map(todo => todo))
  //   if()
  // }

  // const handleDone = () => {
  //   console.log(todos.filter(todo => todo.isDone === true))
  //   if(todos.isDone === true){
  //     todoitem
  //   }
  //   setTodos(todos.filter(todo => todo.isDone === true))
  // }

  // const handleUnDone = () => {
  //   console.log(todos.filter(todo => todo.isDone === false))
  //   setTodos(todos.filter(todo => todo.isDone === false))
  // }

  return (
    <AppWrapper className="App">
      <TodoTop 
      value={value} 
      handleChange={handleChange}
      handleKeyDown={handleKeyDown}
      handleBtnClick={handleBtnClick}
      />
      <ChooseBtnWapper>
        {/* <ChooseBtn onClick={()=>{alert(todos.map(todo=>todo))}}>Total</ChooseBtn> */}
        {/* <ChooseBtn onClick={handleTotal}>Total</ChooseBtn>
        <ChooseBtn onClick={handleDone}>Done</ChooseBtn>
        <ChooseBtn onClick={handleUnDone}>Undone</ChooseBtn> */}
      </ChooseBtnWapper>
      {
        todos.map(todo => 
        <TodoItem 
        className="todoitem"
        key={todo.id} 
        todo={todo} 
        handleDeleteTodo={handleDeleteTodo} 
        handleToggleIsDone={handleToggleIsDone}
        />
        )
      }
    </AppWrapper>
  );
}
export default App;