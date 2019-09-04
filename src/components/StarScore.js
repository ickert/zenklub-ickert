import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 5px;
    display: flex;
    .reviews {
        margin-left: 5px;
    }
`

const Stars = props => {
    return (
        <Container>
            <StarRatingComponent
                name="rate1"
                starCount={5}
                value={props.stars}
            />
            <span className="reviews">
                ({props.reviews ? props.reviews : 0} reviews)
            </span>
        </Container>
    )
}

export default Stars;