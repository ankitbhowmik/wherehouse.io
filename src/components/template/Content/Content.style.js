import styled from "styled-components";
import { breakPoints } from "../../particle/mediaQuery";

export const ResponsiveCard = styled.div`
    display: grid;
    grid-gap: 20px;
    @media ${breakPoints.tablet}{
        grid-template-columns: 1fr 1fr;
    }
    @media ${breakPoints.desktop}{
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`

export const MainContent = styled.div`
    margin-top: 50px;
    display: grid;
    grid-gap:20px;
    margin-bottom: 70px;
    @media ${breakPoints.tablet}{
        grid-template-columns: 1fr 4fr;
    }
`