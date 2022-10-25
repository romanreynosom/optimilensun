import './pie.css'
import productos from '../lensun principal/principla/len'
import Piecorreo from './piecorreo'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';

function Pie(){
    return(
        <div className='body'>
        
        <h3>
           <h2>Contacto </h2>  
            <br/>
            <a  href='https://api.whatsapp.com/send?phone=5491161367339&text=.' target="_blank"><img src={productos[6].img}></img> <p>telefono </p></a>
            <div className='botonPie'><img src={productos[9].img} /><Piecorreo/>  </div>
            <a href="https://www.instagram.com/optimizartecno/?igshid=YmMyMTA2M2Y%3D"  target="_blank"><img src={productos[10].img}></img><p>instagram</p> </a>


        </h3>
        
            
        </div>
    )
}

export default Pie