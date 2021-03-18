import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from '../../organism/Launch/Launch.style';

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 15px;
    & .blue{
        flex-grow: 1;
    }
`

const Set = ({field, value}) => {
    return (
        <StyledDiv>
            <Text size="1.1em" style={{color: "black"}}>{field} : &nbsp;</Text> <span className="blue">{value}</span>
        </StyledDiv>
    )
}

Set.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string,
}

export default Set;
