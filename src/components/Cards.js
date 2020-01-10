import React  from 'react';
import firebase from '../config/firebase'
import './Cards.css';
import Map from './Map';

import {Card,Container, Row, Col, CardImg, CardBody,CardTitle, CardSubtitle} from 'reactstrap';

const db = firebase.firestore();
const data = db.collection('sodimac');


export const pathContext=React.createContext();


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


    React.useEffect(() => {
        //llamando al metodo obtener
        retrieve().then(products => {
        setproductsList(products);
     }) 
      },[]);
   
      
  return productsList.length===0 ? <h1>Cargando Productos ...</h1> : (
   <Container>
     <Row>
        {productsList.map(product => ( 
          <Col md={6}>
      <Card>
        <CardImg top width="100%" src={product.imagen}  />
        <CardBody>
          <CardTitle>{product.nombre}</CardTitle>
          <CardTitle>Precio:{product.precio}</CardTitle>
          <CardSubtitle>SKU: {product.SKU}</CardSubtitle>
          <CardSubtitle>Pasillo: {product.pasillo}</CardSubtitle>
          <Map destination={product.pasillo}/>
        </CardBody>
      </Card>
      <br/>
      </Col>   
        ))}
  
    </Row>
    </Container>
  );
};

export default Cards;