import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props=> props.active ? "rgb(144, 185, 46)" : "rgb(204, 228, 166)"}; 
    border: none;
    padding: 5px 15px;
    font-size: 1em;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
`

export default Button;