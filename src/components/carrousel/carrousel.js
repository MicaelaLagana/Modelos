import React from "react";
import { arrayOf, string, shape, oneOf, bool } from 'prop-types'
import { Carousel as CarouselBoostrap } from 'react-bootstrap';
import styled from "styled-components";
import CarrouselItemCard from "../carrousel_item_card";

const {
  Caption,
  Item,
} = CarouselBoostrap;
const CarrouselContainer = styled.div(props => {
  return {
    height: props.height,
    width: props.width,
    display: "flex"
  }
})

const Carousel = ({ height, width, itemRender, items }) => {
    const getItemsFormanted = () => {
    if(itemRender === 'banner') {
      return items.map((item, index) =>  (
        <Item>
          <div>

          </div>
        <img style={{height: '31em', width: '90vw' }}
          className="d-block"
          src={item.img}
          alt={item.title}
        />
        <Caption>
          <p className="carousel-text">{item.description}</p>
        </Caption>
      </Item>
      ))
    }

    const pages = [];
    const amountPages = Math.ceil(items.length / 3);
    let index = 0
    for(let i = 0; i < amountPages; i++) {
      for(let b = 0; b < 3; b++) {
        if(b===0) {
          pages[i] = [];
        }

        if(items[index]) {

          pages[i].push(items[index]);
        }
        index += 1;
      }
    }

    return pages.map(p => (
      <Item className="carousel-card">
        <CarrouselItemCard page={p} />
      </Item>
    ));
  }

  return (
  <CarrouselContainer height={height} width={width}>
    <CarouselBoostrap>
        {
          getItemsFormanted()
        }
    </CarouselBoostrap>
  </CarrouselContainer>
  )
}
Carousel.propTypes = {
  autoPlay: bool,
  showControls: bool,
  items: arrayOf(shape({
    img: string,
    title: string,
    description: string
  })).isRequired,
  itemRender: oneOf(['banner', 'card']),
  height: string,
  width: string,
}

Carousel.defaultProps = {
  autoPlay: true,
  showControls: true,
  itemRender: 'banner',
  height: '75vh',
  width: '100%',
}


export default Carousel;