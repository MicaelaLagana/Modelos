import React from "react";
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Container = styled.div`
    margin: 0 10px;
    display: inline-flex;
    height: 250px
`;

const CarrouselItemCard = ({ page }) => {
  return page.map(card => (
    <Container>
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {card.date}
          </Typography>
          <Typography variant="h5" component="div">
            {card.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {card.role}
          </Typography>
          <Typography variant="body2">
            {card.comment}

          </Typography>
        </CardContent>
      </Card>
    </Container>
  ))
}


export default CarrouselItemCard;