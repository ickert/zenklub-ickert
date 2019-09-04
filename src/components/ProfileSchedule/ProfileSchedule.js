import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getSchedule } from 'services/ScheduleService';
import Dates from './ProfileScheduleDates';
import Times from './ProfileScheduleTimes';
import moment from 'moment';

const Container = styled.div`
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19)
`

const Header = styled.div`
    background: #0E7AE3;
    text-align: center;
    color: #fff;
    padding: 20px;
    border-radius: 4px 4px 0px 0px;

    .title {
        font-weight: 700;
        font-size: 20px;
    }

    .time-zone {
        opacity: .7
    }
`

const getInitialDates = () => {
    const limit = 4
    return [...Array(limit)].map((item, index) => {
        const d = moment().add(index, 'days')
        return {
            weekDay: d.format('ddd'),
            textData: d.format('MMM Do'),
        }
    })
}

const ProfileSchedule = props => {
    const [dates] = useState(getInitialDates())
    const [loading, setLoading] = useState(true)
    const [schedule, setSchedule] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const schedule = await getSchedule(23)
            setSchedule(schedule)
            setLoading(false)
        }

        fetchData();
    }, [])
    return (
        <Container {...props}>
            <Header>
                <div className="title">
                    Schedule your session!
                </div>
                <div className="time-zone">
                    Timezone: Krakow (+1)
                </div>
            </Header>
            <Dates dates={dates} />
            {loading ? <div className="textCenter mt20">Loading schedule...</div> : (<Times schedule={schedule} />)}
        </Container>
    )
}

export default ProfileSchedule;