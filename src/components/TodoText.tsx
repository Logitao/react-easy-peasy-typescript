import styled from 'styled-components'
const TodoText = styled.div`
    cursor: pointer;
    box-sizing: content-box;
    width: 100%;
    padding-left: 6px;
    transition: all 0.05s linear;
    &:hover {
        border-left: 3px solid black;
    }
    font-family: 'Montserrat';
    font-size: 20px;
    text-decoration: ${(props: { done: boolean }) =>
        props.done ? 'line-through' : 'none'};
    font-style: ${(props: { done: boolean }) =>
        props.done ? 'italic' : 'none'};
    user-select: none;
`
export default TodoText
