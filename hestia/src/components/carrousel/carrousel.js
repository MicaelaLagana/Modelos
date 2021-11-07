import React from "react";
import Carousel from 'react-material-ui-carousel';
import { arrayOf, string, shape, oneOf, bool } from 'prop-types'
import styled from "styled-components";
import CarrouselItemBanner from "../carrousel_item_banner";
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';

const Carrousel = ({ items, itemRender, height, width, autoPlay, showControls }) => {
  const CarrouselContainer = styled.div(props => {
    return {
      height: height,
      width: width,
    }
  })

  const getItemFormanted = (item) => {
    return itemRender === 'banner' ? <CarrouselItemBanner {...item} /> : null;
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
          items.map((item, index) => getItemFormanted(item))
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