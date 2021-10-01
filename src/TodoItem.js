import styled from 'styled-components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from './constants/style';

const TodoItemWrapper = styled.div`
  // visibility: visible;
  // visibility: hidden;
  // display: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 9px 16px;
  border-left: 5px solid ${props => props.theme.colors.primary_1};
  margin-top: 30px;
  & + & {  //選2個TodoItemWrapper
    margin-top: 13px;
  }
  &:hover {
    background: ${props => props.theme.colors.primary_3};
  }
  &:hover .delbtn{
    visibility: visible;
  }
  ${MEDIA_QUERY_SM} {
    padding: 0px;
    margin: 30px 8px 0px 8px;
  }
`

const TodoContent = styled.label`
  color: ${props => props.theme.colors.primary_2};
  width: 80%;
  overflow: scroll;
  word-wrap: keep-all;

  // font-size: ${props => props.size === 'XL' ? '20px' : '14px'}

  font-size: 14px;

  ${props => props.size === 'XL' && `
  font-size: 20px;
  `}

  //選擇器加$代表為styled components用，不會顯示在dev tool上
  ${props => props.$isDone && `   
    text-decoration: line-through;
    color: lightgray;
  `}

  ${MEDIA_QUERY_SM} {
    max-width: 300px;
  }
`

const Button = styled.button`
  display: flex;
  padding: 4px;
  background: none;
  font-size: 20px;
  color: ${props => props.theme.colors.primary_2};
  border: none;
  margin-left: 4px;

  &:hover {
    color: ${props => props.theme.colors.primary_4};
  }

  ${MEDIA_QUERY_MD} {
    margin-left: 3px;
  }
  ${MEDIA_QUERY_SM} {
    margin-left: 7px;
  }
`
const DelButton = styled(Button)`
  visibility: hidden;
  margin-left: 0px;
  margin-right: 3px;
  font-size: 40px;
  color: ${props => props.theme.colors.primary_4};
  &:hover {
    color: ${props => props.theme.colors.primary_1};
  }
  ${MEDIA_QUERY_MD} {
    margin-right: 0px;
  }
  ${MEDIA_QUERY_SM} {
    margin-right: 8px;
  }
`

export default function TodoItem ({className, todo, size, handleDeleteTodo, handleToggleIsDone}) {
  // 使用callback func
  const handleToggleClick = () => {
    handleToggleIsDone(todo.id);
  }
  return (
    <TodoItemWrapper className={className} data-todo-id={todo.id}>
      <Button id={todo.id} onClick={handleToggleClick}>
        {/* 透過三元運算子判斷 todo 狀態  */}
        {/* {todo.isDone ? '已完成' : '未完成'} */}

        {/* 邏輯運算子 &&  */}
        {todo.isDone && '✔'}
        {!todo.isDone && '▢'}
      </Button>
      <TodoContent htmlFor={todo.id} $isDone={todo.isDone} size={size}>{todo.content}</TodoContent>
      {/* 使用匿名函式 */}
      <DelButton className="delbtn" onClick={()=>{
        handleDeleteTodo(todo.id)
      }}>×</DelButton>
    </TodoItemWrapper>
  )
}

// export default function TodoItem ({className, content, size}) {
//   return (
//     <TodoItemWrapper className={className}>
//     <TodoContent size={size}>{content}</TodoContent>
//     <TodoButtonWrapper>
//       <Button>已完成</Button>
//       <PinkButton>刪除</PinkButton>
//     </TodoButtonWrapper>
//     </TodoItemWrapper>
//   )
// }

