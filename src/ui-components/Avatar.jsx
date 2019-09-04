import React from 'react';
import styled from 'styled-components';
import AvatarExample from 'assets/avatar-example-svg';

const Container = styled.div`
    filter: grayscale(100%);
    background: gray;
    width: 180px;
    height: 180px;
    border-radius: 90px;
    display: flex;
    justify-content: center;
`

const Avatar = () => {
    return (
        <Container>
            <AvatarExample/>
        </Container>
    )
}

export default Avatar;

