
import productos from '../lensun principal/principla/len';

function LensunHeader(){
    return(
        <div>
          <header class="bg  py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                  <img height={100} className='logolen' src={productos[2].img}/>
                  
                </div>
            </div>
        </header>
        </div>
    )
}

export default LensunHeader