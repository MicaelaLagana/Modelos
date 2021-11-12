import React from "react";
import { Card } from 'react-bootstrap';

const {
  Body,
  Subtitle,
  Text,
  Title
} = Card;

const CarrouselItemCard = ({ page }) => {
  return (
    <div className="carousel-card-item">
      {
        page.map(card => (
          <Card className="carousel-card-item-data">
            <Body>
              <Subtitle className="mb-2 text-muted">{card.date}</Subtitle>
              <Title>{card.name}</Title>
              <Subtitle className="mb-2 text-muted">{card.role}</Subtitle>
              <Text>
              "{card.comment}"

              </Text>
            </Body>
          </Card>
        ))
      }

    </div>
  )
}


export default CarrouselItemCard;