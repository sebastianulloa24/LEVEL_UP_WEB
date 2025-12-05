import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/css/cards.css';
import CardBody from 'react-bootstrap/esm/CardBody';

function CardItem({ title, text, image, buttonText, link }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mt-3 d-flex">
      {/* d-flex permite que la tarjeta se estire en altura igual al contenedor */}
      <Card className="ajuste-cards flex-fill">
        <Card.Img variant="top" src={image} alt={title} className="card-img-custom" />
        <Card.ImgOverlay>
          <Card.Title className="text-color">{title}</Card.Title>
        </Card.ImgOverlay>
        <CardBody className="text-color">
          <Card.Text>{text}</Card.Text>
          {/* Descomenta si quieres el botón */}
          {/* <Button variant="primary" href={link}>{buttonText}</Button> */}
        </CardBody>
      </Card>
    </div>
  );
}

export default CardItem;
