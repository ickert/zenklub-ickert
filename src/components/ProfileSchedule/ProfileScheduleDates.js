import React from 'react';
import styled from 'styled-components';

const Day = styled.div`
    text-transform: uppercase;
    padding: 5px;
    .weekDay {
        font-size: 12px;
    }
    .textData {
        font-weight: 500;
    }
`

const ProfileScheduleDates = props => {
    if (props.dates) {
        return (
            <div className="flexContainer">
                {
                    props.dates.map(date => {
                        return (
                            <Day key={date.weekDay} className="flex textCenter">
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