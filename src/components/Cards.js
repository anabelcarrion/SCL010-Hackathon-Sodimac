import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Cards = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://oechsle.vteximg.com.br/arquivos/ids/1187866-516-516/1278047.jpg?v=637058311888200000" alt="Card image cap" />
        <CardBody>
          <CardTitle>Nombre del Producto</CardTitle>
          <CardSubtitle>SKU</CardSubtitle>
          <CardSubtitle>Precio</CardSubtitle>
          <CardText>descipcion</CardText>
          <Button>Localizar</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;