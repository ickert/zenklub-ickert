import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border-radius: 4px;
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

const ProfileSchedule = props => {
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
        </Container>
    )
}

export default ProfileSchedule;