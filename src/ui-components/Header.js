import React from 'react';
import styled from 'styled-components';
import background from 'assets/images/wave_top_white_1.png';

const Header = styled.div`
    position: relative;
    background: #0e7ae3;
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
`

const HeaderComponent = props => {
    return (
        <Header>
            <div className="textCenter p20">
                <h1>{props.children}</h1>
            </div>
            <div className="header-footer">

            </div>
        </Header>
    )
}

export default HeaderComponent;