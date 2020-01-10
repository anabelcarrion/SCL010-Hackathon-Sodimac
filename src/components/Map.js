/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import firebase from '../config/firebase'
import {CardImg} from 'reactstrap';

const db = firebase.firestore();
const data = db.collection('pasillo');


export const pathContext=React.createContext();

 

//obtener datos de firebase  
const retrieveRoute = (stringRuote) => {
    
    return new Promise((resolve, reject) => {
        data.doc(stringRuote).get()
            .then(doc => {
              if (doc.data()===undefined){
                alert ("El producto se encuentra en el pasillo donde usted esta");
              }else{
                resolve(doc.data().ruta) 
              }
                
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
                reject(error)
            });

    })
};


const Map = (props) => {

  const {className, destination} = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  //Hooks
 const [route, setroute] = React.useState([]);
 const [origin, setorigin] = React.useState([]);

 
 // React.useEffect(() => {
      //llamando al metodo obtener
 //     retrieveRoute().then(route => {
 //       setroute(route);
 //  }) 
 //   },[]);
 
 
  return (
    <div>
      <Button color="danger" onClick={toggle}>Ver Mapa</Button>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Ruta</ModalHeader>
        <ModalBody>
        En que pasillo usted se encuentra
        <input id="from" placeholder="Ingrese numero de pasillo aqui" value={origin}  onChange={e => setorigin(e.target.value)}></input>
        <br/>
        <Button color="primary" onClick={()=>{
            let routeId=""+origin+destination;
            retrieveRoute(routeId).then(route => {
              setroute(route);
                })
          }}>Mostrar Ruta</Button>{' '}
          <br/>
        <CardImg top width="100%" src={route}/>
        </ModalBody>
        <ModalFooter> 
          <Button color="secondary" onClick={toggle} >Cerrar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Map;