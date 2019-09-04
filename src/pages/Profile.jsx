import React from 'react';
import styled from 'styled-components';
import { Header, Genericontainer } from 'ui-components';
import ProfileInfo from 'components/ProfileInfo';
import ProfileSchedule from 'components/ProfileSchedule/ProfileSchedule';

const ContainerProfile = styled.div`
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 20px;
    }

`

const Profile = () => {
    return (
        <React.Fragment>
            <Header>
                Professional Profile
            </Header>
            <Genericontainer>
                <ContainerProfile className="flexContainer mt60">
                    <ProfileInfo className="flex mb40" />
                    <ProfileSchedule className="flex mb40" />
                </ContainerProfile>
            </Genericontainer>
        </React.Fragment>
    )
}

export default Profile;