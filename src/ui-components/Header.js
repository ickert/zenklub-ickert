import React from 'react';
import styled from 'styled-components';
import background from 'assets/images/wave_top_white_1.png';
import { Link } from 'react-router-dom';

const Header = styled.div`
    position: relative;
    background: linear-gradient(#0e7ae3, rgba(0, 0, 0, 0.6));
    background-size: cover;
    height: 200px;
    color: #fff;

    .header-footer {
        width: 100%;
        height: 50px;
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        background: url(${background}) center top/100% 100% no-repeat;
    }

    a {
        color: #fff;
    }
`

const HeaderComponent = props => {
    return (
        <Header>
            <div className="textCenter p20 flexCenter">
                <Link to="/">Back</Link>
                <h1 className="flex">{props.children}</h1>
            </div>
            <div className="header-footer">

            </div>
        </Header>
    )
}

export default HeaderComponent;