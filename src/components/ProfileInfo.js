import React, {useState} from 'react';
import styled from 'styled-components';
import { Avatar } from 'ui-components';
import StarScore from 'components/StarScore';

const Name = styled.div`
    color: #4d5c65;
    font-size: 1.4em;
    margin-bottom: 10px;
`

const Profession = styled.span`
    color: #0E7AE3;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
`

const Place = styled.span`
    font-weight: 400;
    color: #000;
    border-left: 1px solid #999;
    margin-left: 5px;
    padding-left: 5px;
`

const PriceInfo = styled.div`
    margin-top: 10px;
    .price {
        font-size: 20px;
        font-weight: 600;
        text-transform: uppercase;
    }

    .time {
        font-weight: 600;
        font-size: 14px;
        text-transform: uppercase;
    }
`

const Description = styled.div`
    margin-top: 20px;
    padding-right: 30px;
`

const initialStateMock = {
    stars: 5,
    priceInfo: {
        price: 160,
        time: 50
    },
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
}

const ProfileInfo = props => {
    const [stars, setStars] = useState(initialStateMock.stars)
    const priceInfo = {
        ...initialStateMock.priceInfo
    }
    const desc = initialStateMock.description
    return (
        <div {...props}>
            <div className="flexCenter">
                <Avatar />
                <div className="ml20">
                    <Name>
                        Professional name
                    </Name>
                    <div className="flexCenter">
                        <Profession>
                            Psicologist
                        </Profession>
                        <Place>
                            Krakow
                        </Place>
                    </div>
                    <StarScore stars={stars}/>
                    <PriceInfo>
                        <span className="price">
                            {`RS ${priceInfo.price}`}
                        </span>
                        <span className="time">
                           {` / ${priceInfo.time}  Minutes`}
                        </span>
                    </PriceInfo>
                </div>
            </div>
            <Description>
                {desc}
            </Description>
        </div>
    )
}

export default ProfileInfo;