import React from 'react';
import styled from 'styled-components';

const Day = styled.div`
    text-transform: uppercase;
    padding: 5px 5px 25px 5px;
    .weekDay {
        font-size: 12px;
    }
    .textData {
        font-weight: 500;
    }

    ${props=> {
        if (props.hoverOn) {
            return `
                background: rgba(14,122,227, .1)
            `
        }
    }}
`

const ProfileScheduleDates = props => {
    if (props.dates) {
        return (
            <div className="flexContainer">
                {
                    props.dates.map((date, index) => {
                        return (
                            <Day key={date.weekDay}
                                className="flex textCenter"
                                hoverOn={index === props.indexHover}
                                onMouseEnter={() => props.setIndexHover(index)}
                                onMouseLeave={() => props.setIndexHover(null)}
                                >
                                <div className="weekDay">
                                    {date.weekDay}
                                </div>
                                <div className="textData">
                                    {date.textData}
                                </div>
                            </Day>
                        )
                    })
                }
            </div>
        )
    }
    return null;
}

export default ProfileScheduleDates;