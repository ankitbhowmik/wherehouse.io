import styled from "styled-components";

export const FilterList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    justify-items: center;
    & button{
        width: 100px;
    }

`

export const FilterText = styled.p`
    border-bottom: 2px solid lightgray;
    max-width: 160px;
    margin: 20px auto 15px;
    text-align: center;
    font-size: 1.2em;
    color: darkslategrey;
`