import styled, { css } from "styled-components";

export const Card = styled.div`
    padding: 20px;
    background-color:white;
    border-radius: 4px;
    ${props=> props.width && css`
        max-width: ${props.width};
    `}
`
