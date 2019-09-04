import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    background-size: cover;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1, a {
        color: #fff;
    }
`;

const Main = () => {
    return (
        <Content>
            <div className="textCenter">
                <h1>
                    Zenklub: Frontend Challenge - Felipe Ickert
                </h1>
                <Link to="/profile">Enter to the Profile Example</Link>
            </div>
        </Content>
    )
}

export default Main;