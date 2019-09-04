
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

const ProfileScheduleDates = props => {
    const { schedule } = props
    if (schedule) {
        return (
            <div className="flexContainer mt20">
                {schedule.data.dates.map((time, index) => {
                    return (
                        <div key={`time-${index}`} className="flex flexContainerColumnCenter textCenter">
                            {
                                time.freeTime.map((freeTime, indexF) => {
                                    if (!freeTime) {
                                        return '-'
                                    }
                                    return (
                                        <Time key={`freetime-${index+indexF}`}>
                                            {freeTime}
                                        </Time>
                                    )
                                })
                            }
                            {!!time.freeTime.length ? <Time>more</Time> : '-'}
                        </div>
                    )
                })}
            </div>
        )
    }
    return null;
}

export default ProfileScheduleDates;