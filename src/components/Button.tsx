import styled from 'styled-components'
const Button = styled.button`
    user-select: none;
    cursor: pointer;
    display: inline-block;
    color: black;
    background: #fff;
    border: 1px solid black;
    padding: 10px 25px 10px 25px;
    transition: all 0.09s ease-in-out;
    width: ${(props: { block?: boolean }) => props.block && '100%'};
    &:hover {
        color: #fff;
        background: black;
    }
`
export default Button
