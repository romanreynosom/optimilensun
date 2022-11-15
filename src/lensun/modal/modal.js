import React from 'react';
import "./modal.css"
import "../pie/piecorreo.css"
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import productos from '../lensun principal/principla/len';

class Contacto extends React.Component{
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
      <body className='bodyModal'> 
      <Button  className='botonModal' onClick={this.abrirModal}  >Contactanos</Button>

      

      <Modal className='modalPie' isOpen={this.state.abierto} style={modalStyles} >
        <ModalHeader>
          <img className='modalimg' height={320} src={productos[11].img  }/>
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

            <label for= "comment">COMENTARIO</label>
            <textarea className='comentario' name='comments' cols="60" required></textarea>
          </FormGroup>
          <div className='btnEnviar'><button class="btn btn-danger" type="submit">enviar</button> </div>
        

          <input type="hidden" name="_next" value="http://optimizartecno.com.ar/"></input>
          <input type="hidden" name="_captcha" value="false"></input>
          </form>
        </ModalBody>

        
           <div className='cerrar'><Button color="primary" position="center" onClick={this.abrirModal}>Cerrar</Button></div> 
          
       
      </Modal>
      </body>
      </>
    )
  }
}

export default Contacto;