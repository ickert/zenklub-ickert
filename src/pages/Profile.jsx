import React from 'react';
import { Header, Container } from 'ui-components';
import ProfileInfo from 'components/ProfileInfo';
import ProfileSchedule from 'components/ProfileSchedule';

const Profile = () => {
    return (
        <React.Fragment>
            <Header>
                Professional Profile
            </Header>
            <Container>
                <div className="flexContainer mt20">
                    <ProfileInfo className="flex" />
                    <ProfileSchedule className="flex" />
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Profile;