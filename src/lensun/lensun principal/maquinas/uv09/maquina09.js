import React from 'react';
import "../custopro/custompro.css"
import "../uv03/uv03.css"
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Table} from 'reactstrap';
import productos from '../../principla/len';

class Maquina09 extends React.Component{
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
      <button className='botonPrincipal' onClick={this.abrirModal}><strong>+ INFO</strong></button>

      

      <Modal isOpen={this.state.abierto} style={modalStyles} >
        <ModalHeader>
          <img height={300} src={productos[11].img  }/>
        </ModalHeader>
        <ModalBody>
          <Table> 
        <h1 className='h1'>Uv03</h1> 
        <tr>El curado uv mejora la proteccion de la pantalla</tr>
        <tr>Ideal para Pantallas Curvas</tr>
        <tr>36 piezas uv</tr>

        
        
        </Table>
        </ModalBody>

       
            
            <button className='btn btn-primary' onClick={this.abrirModal}>Cerrar</button>
        
      </Modal>
      </body>
      </>
    )
  }
}

export default Maquina09;