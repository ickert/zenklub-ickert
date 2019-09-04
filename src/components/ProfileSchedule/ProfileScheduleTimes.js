
import React from 'react';
import styled from 'styled-components';

const Time = styled.div`
    background: #d0d0d0;
    border-radius: 4px;
    font-weight: 600;
    padding: 10px 15px 10px 15px;
    margin-bottom: 10px;
    cursor: pointer;
    text-transform: uppercase;

    :hover {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);
        background: #0E7AE3;
        color: #fff;
    }

`
const TimeEmpty = styled.div`
    height: 47px;
`

const ColumnTime = styled.div`
    ${props=> {
        if (props.hoverOn) {
            return `
                background: rgba(14,122,227, .1)
            `
        }
    }}
`

const ProfileScheduleDates = props => {
    const { schedule } = props
    if (schedule) {
        return (
            <div className="flexContainer">
                {schedule.data.dates.map((time, index) => {
                    return (
                        <ColumnTime
                                key={`time-${index}`}
                                className="flex flexContainerColumnCenter textCenter"
                                hoverOn={index === props.indexHover}
                                onMouseEnter={() => props.setIndexHover(index)}
                                onMouseLeave={() => props.setIndexHover(null)}
                            >
                            {
                                time.freeTime.map((freeTime, indexF) => {
                                    if (!freeTime) {
                                        return <TimeEmpty key={`freetime-${index+indexF}`}>-</TimeEmpty>
                                    }
                                    return (
                                        <Time key={`freetime-${index+indexF}`}>
                                            {freeTime}
                                        </Time>
                                    )
                                })
                            }
                            {!!time.freeTime.length ? <Time>more</Time> : '-'}
                        </ColumnTime>
                    )
                })}
            </div>
        )
    }
    return null;
}

export default ProfileScheduleDates;