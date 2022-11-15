import React from 'react';
import "../custopro/custompro.css"

import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Table} from 'reactstrap';
import productos from '../../principla/len';

class CustomLite extends React.Component{
  state={
    abierto: false,
  }

  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }

  render(){

    const modalStyles={
     
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      innerHeight:  ""
    }
    return(
      <>
      <body className='bodymodal'> 
      <button className='botonPrincipal' onClick={this.abrirModal}><strong>+ INFO</strong> </button>

      

      <Modal isOpen={this.state.abierto} style={modalStyles} >
        <ModalHeader>
          <img height={300} src={productos[11].img  }/>
        </ModalHeader>
        <ModalBody>
          <Table> 
        <h1>Custompro Lite</h1> 
        <h2>Kit Inicial:</h2>
        <tr>30 Film Prueba</tr>
        <tr>5 Back Diseño</tr>
       <tr>3 Cuchillas de Corte</tr> 
        <tr>5 Film Tablet (3 8" y 2 "10")</tr>
        <tr>10 Paño de Limpieza</tr>
        <tr>1 Pad Silicona para Instalacion</tr> 
        <tr>1 Espatula 23cm</tr>
        <tr>1 Espatula 15cm</tr> 
        <tr>Spray Atomizador(150ml y 200ml) </tr>
        
        
        </Table>
        </ModalBody>

        
            
            <button className='btn btn-primary' onClick={this.abrirModal}>Cerrar</button>
       
      </Modal>
      </body>
      </>
    )
  }
}

export default CustomLite;