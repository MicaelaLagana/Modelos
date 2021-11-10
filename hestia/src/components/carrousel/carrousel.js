import React from "react";
import Carousel from 'react-material-ui-carousel';
import { arrayOf, string, shape, oneOf, bool } from 'prop-types'
import styled from "styled-components";
import CarrouselItemBanner from "../carrousel_item_banner";
import CarrouselItemCard from "../carrousel_item_card";
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';

const Carrousel = ({ items, itemRender, height, width, autoPlay, showControls }) => {
  const CarrouselContainer = styled.div(props => {
    return {
      height: height,
      width: width,
    }
  })

  const getItemsFormanted = () => {
    if(itemRender === 'banner') {
      return items.map((item, index) => <CarrouselItemBanner {...item} />)
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
    
    return pages.map(p => <CarrouselItemCard page={p} />);
  }
  
  return (
    <CarrouselContainer>
      <Carousel
        navButtonsAlwaysVisible={showControls}
        autoPlay={autoPlay}
        NextIcon={<ChevronRight />}
        PrevIcon={<ChevronLeft />}
        navButtonsProps={{  //modifica los estilos de los botones next y prev
          style: {
          }
        }}
      >
        {
          getItemsFormanted()
        }
      </Carousel>
    </CarrouselContainer>
  );
}

Carrousel.propTypes = {
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

Carrousel.defaultProps = {
  autoPlay: true,
  showControls: true,
  itemRender: 'banner',
  height: '75vh',
  width: '100%',
}


export default Carrousel;