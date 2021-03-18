import styled from "styled-components";

export const LaunchName = styled.p`
    color: darkblue;
    font-size: 1.4em;
    font-weight:bold;
    margin: 15px 0;
`

export const Text = styled.span`
    font-size: ${props => props.size || "1em"};
    color: ${props=> props.color || "inherit"};
    font-weight: bold;
`

export const LaunchDetail = styled.div`
    display: flex;
    flex-direction: column;
    & .blue{
        color: #1A5276;
    }
    & ul{
        margin: 10px 0;
    }
` 