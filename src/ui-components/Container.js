import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
        max-width: 1140px;
    }
`

const ContainerComponent = props => {
    return (
        <Container>
            <div>
                {props.children}
            </div>
        </Container>
    )
}

export default ContainerComponent;

