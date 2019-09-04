import React from 'react';
import styled from 'styled-components';

const ArrowInside = styled.i`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    width: 3px;
    height: 3px;

    &.right {
        margin-right: 4px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }

    &.left {
        margin-left: 4px;
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
    }
`

const ArrowContainer = styled.div`
    background: #d0d0d0;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;

    ${props => {
        if (props.disabled) {
            return `
                > i {
                    border-color: #fff;
                    cursor: not-allowed;
                }
            `

        }
    }}

`

const Arrow = props => {
    return (
        <ArrowContainer {...props}>
            <ArrowInside {...props} />
        </ArrowContainer>
    )
}

export default Arrow;