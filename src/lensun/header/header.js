
import { useState } from 'react';
import Contacto from '../modal/modal';
import './header.css';
import productos from '../lensun principal/principla/len';

const Cabeza = () => {

    const [ menu , setMenu ] = useState( false )

    const toggleMenu = () => {
        setMenu( !menu )
    }

    return (
    <header className="CabeceraN fixed-top">
        <h1 className="Cabecera-h1">
            <div className="Cabecera-a">
                <Contacto />
            </div>
        </h1>

        <button 
            onClick={ toggleMenu }
         className="Cabecera-button">
        <svg className='Cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </button>

        <nav className={ `Cabecera-nav ${ menu ? 'isActive' : '' }` }>
            <ul className="Cabecera-ul">
                <li className="Cabecera-li"><a href="/" className="Cabecera-a"><h4 className='h4i' >Inicio</h4></a></li>
                <li className="Cabecera-li"><a href="https://www.instagram.com/optimizartecno/?igshid=YmMyMTA2M2Y%3D" target="_blank" className="Cabecera-a"><img className='logo' src={productos[12].img}/></a></li>
                <li className="Cabecera-li"><a href="https://api.whatsapp.com/send?phone=5491161367339&text=." target="_blank" className="Cabecera-alogo"><img className='logo' src={productos[13].img}/></a></li>
                
            </ul>
        </nav>

    </header>
)
}

export default Cabeza

