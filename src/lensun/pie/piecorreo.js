import React from 'react';
import "./pie.css"

import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import productos from '../lensun principal/principla/len';

class Piecorreo extends React.Component{
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
      <body className='bodyPie'> 
      <Button  className='botonPie' onClick={this.abrirModal}  >optimizartecno@gmail.com</Button>

      

      <Modal isOpen={this.state.abierto} style={modalStyles} >
        <ModalHeader>
          <img height={320} src={productos[11].img  }/>
        </ModalHeader>
        <ModalBody>
          <form action="https://formsubmit.co/optimizartecno@gmail.com" method="POST"> 
          <FormGroup>
            <Label for="name">NOMBRE</Label>
            <Input type="name" name='name' required/> 

            <FormGroup> 
            <Label for="telefono">TELEFONO</Label>
            <Input type="number" name="telefono" required/>
            </FormGroup>
           
          </FormGroup>
          <FormGroup>
            <Label for="subject">ASUNTO</Label>
            <Input type='text' name='asunto' required/> 

            <label for= "comment">Comentario</label>
            <textarea name='comments' cols="60" row="200" required></textarea>
          </FormGroup>
          <div className='btnEnviar'><button class="btn btn-danger" type="submit">enviar</button> </div>
        

          <input type="hidden" name="_next" value="http://localhost:3000"></input>
          <input type="hidden" name="_captcha" value="false"></input>
          </form>
        </ModalBody>

        <ModalFooter>
            
            <Button color="secondary" position="center" onClick={this.abrirModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
      </body>
      </>
    )
  }
}

export default Piecorreo;