
import productos from '../../lensun principal/principla/len';
import "./headerOpts.css"
function Optiheader(){
    return(
        <div className='bodyOp'>
          <header class="bg  py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                  <img height={400} className='logOp' src={productos[14].img}/>
                  
                </div>
            </div>
        </header>
        </div>
    )
}

export default Optiheader