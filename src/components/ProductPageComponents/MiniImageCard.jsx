// MiniImageCard , is used to showcase other pictures
// of the that specific product
// Imports
import React, { Component } from 'react';
import styled from 'styled-components';

// Mini image Container
const ImageContainer = styled.div`
    height: 87.61px;
    width: 88px;
    padding: 3px;
`;
// Image
const Image = styled.img`
    width: 84;
    height: 83.61px;
    object-fit: cover;
`;

// image Class
class MiniImageCard extends Component {
    render() {
        return (
            <ImageContainer>
                <Image src={this.props.data} />
            </ImageContainer>
        );
    }
}

export default MiniImageCard;
