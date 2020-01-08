import React from 'react';
import firebase from '../config/firebase'

import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';


const db = firebase.firestore();
const data = db.collection('sodimac');

//obtener datos de firebase  

const retrieve = () => {

    return new Promise((resolve, reject) => {
        data.get()
            .then(function (querySnapshot) {
                let products = [];
                querySnapshot.forEach(function (doc) {
                    let data=doc.data()
                    data["id"]=doc.id
                    products.push(data)

                });
                resolve(products)
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
                reject(error)
            });

    })
};

const Cards = (props) => {
   
    //Hooks
    const [productsList, setproductsList] = React.useState([]);

    //llamando al metodo obtener
    retrieve().then(products => {
        setproductsList(products);
     })

  return productsList.length===0 ? <h1>Cargando Productos ...</h1> : (
    <div>
        {productsList.map(product => (
      <Card>
        <CardImg top width="100%" src={product.imagen} alt="Card image cap" />
        <CardBody>
          <CardTitle>Nombre {product.nombre}</CardTitle>
          <CardTitle>Precio {product.precio}</CardTitle>
          <CardSubtitle>SKU {product.SKU}</CardSubtitle>
          <CardSubtitle>Pasillo {product.pasillo}</CardSubtitle>
          <Button>Localizar</Button>
        </CardBody>
      </Card>
        ))}
    </div>
  );
};

export default Cards;