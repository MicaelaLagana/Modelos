import React from "react";
import { string } from 'prop-types'
import styled from "styled-components";

const Container = styled.div`
    position: relative;
`;
const ContainerDescription = styled.div`
    position: absolute;
    padding: 0 55px;
    text-align: justify;
    color: white;
    height: 78%;
    justify-content: center;
    display: flex;
    align-items: center;
    z-index: 10;
    font-size: 1.2em;
    font-weight: 700;
    text-shadow: 1px 1px 2px black;
`;

const CoverImage = styled.div`
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: black;
    position: absolute;
    opacity: 0.5;
`;

const CarrouselItemBanner = ({ img, title, description }) => {
    return (
        <Container>
            <ContainerDescription>
                <p>{description}</p>
            </ContainerDescription>
            <CoverImage />
            
             <img style={{ width: '100%' }} alt={title} src={img} />
        </Container>

    );
}

CarrouselItemBanner.propTypes = {
    img: string.isRequired,
    title: string.isRequired,
    description: string.isRequired
}

export default CarrouselItemBanner;