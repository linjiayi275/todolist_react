import styled from 'styled-components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from './constants/style';

const Top = styled.div`
background: ${props => props.theme.colors.primary_3};
padding: 40px 15% 10px 15%;
${MEDIA_QUERY_SM} {
  padding: 20px 0px 10px 0px;
}
`

const Title = styled.h1`
color: ${props => props.theme.colors.primary_2};
border-left: 7px solid ${props => props.theme.colors.primary_1};
border-right: 7px solid ${props => props.theme.colors.primary_1};
margin-top: 100px;
font-size: 40px;
text-align: center;
${MEDIA_QUERY_SM} {
border-left: none;
border-right: none;
}
`

const InputTodo = styled.input`
color: #545247;
width: 85%;
height: 30px;
padding-left: 5px;
border: 1px solid ${props => props.theme.colors.primary_1};
margin-bottom: 20px;
margin-top: 20px;
${MEDIA_QUERY_SM} {
  width: 70%;
}
`

const AddTodoBtn = styled.button`
background: ${props => props.theme.colors.primary_1};
font-size: 20px;
font-weight: 900;
height: 34px;
padding: 1px 0px 0px 0px;
width: 13%;
margin-left: -2px;
color: white;
border: 1px solid ${props => props.theme.colors.primary_1};
`

export default function TodoTop({value,handleChange,handleKeyDown,handleBtnClick}) {
  return(
    <Top>
    <Title>TODO LIST</Title>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <InputTodo 
    type="text" 
    placeholder="Add todo..." 
    value={value} 
    onChange={handleChange}
    onKeyDown={handleKeyDown}
    autoFocus>
    </InputTodo>
    <AddTodoBtn onClick={handleBtnClick}>+</AddTodoBtn>
    </div>
    </Top>
  )
}