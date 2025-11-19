import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/css/cards.css';

function CardItem({ title, text, image, buttonText, link }) {
  return (
    <div className='col-lg-3 mt-3'>
      <Card className='ajuste-cards'>
        <Card.Img variant="top" src={image} alt={title} />
        <Card.ImgOverlay>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary" href={link}>
            {buttonText}
          </Button>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default CardItem;
