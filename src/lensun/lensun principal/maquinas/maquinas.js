import React from "react"
import LensunHeader from "../../header/lensun/headerlensun"
import Custom2 from "./custopro/custompro"
import CustomLite from "./customlite/customlite"
import Maquina03 from "./uv03/uv03"
import "./maquinas.css"
import Maquina09 from "./uv09/maquina09"




function Maquinas(){
    return(
        <div className="maquinas">
        <LensunHeader/>
    
   
      <div class="container px-2 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-5 justify-content-center">
                <div class="col mb-5">
                  <div className="principal"> 
                    <div class="card h-100">
                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/lensuncaba.appspot.com/o/maquinas%2Fmaquina-lensun-custom.jpg?alt=media&token=30ff9819-64bd-4d8f-af40-6dfbd06f551e" /> 
                        <div class="card-body p-4">
                          <div class="text-center">
                            <h5 class="fw-bolder">CustomPro</h5>
                            </div>
                            <button className="botonesmaquinas2"><Custom2/></button>
                           </div>
                          
                    </div>
                </div>
              </div>
                <div class="col mb-5" >
                <div className="principal">
                    <div class="card h-100">
                        <img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/lensuncaba.appspot.com/o/maquinas%2Fmaquinasmall.jpg?alt=media&token=449a18df-813f-4c0c-b124-1a75d2cdf2ba" alt="..." />
                        <div class="card-body p-4">
                          <div class="text-center">
                            <h5 class="fw-bolder">CustomPro Lite</h5>
                           </div>
                           <button className="botonesmaquinas2"><CustomLite/></button>
                        </div>
                       
                       </div>  
                    </div>
                    
                </div>
                
                <div class="col mb-5">
                  <div className="principal"> 
                    <div class="card h-100">
                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/lensuncaba.appspot.com/o/maquinas%2Fmaquina%20uv%20grande%201.jpg?alt=media&token=2a23d7b2-5580-49b8-b405-a42a6a4b6b29" /> 
                        <div class="card-body p-4">
                          <div class="text-center">
                            <h5 class="fw-bolder"> UV 03 </h5>
                            <button className="botonesmaquinas2"><Maquina03/></button>
                           </div>
                        </div>
                        </div>  
                        
                    </div>
                </div>
                <div class="col mb-5">
                <div className="principal">
                    <div class="card h-100">
                        <img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/lensuncaba.appspot.com/o/maquinas%2Fmaquina%20uv%20chica%201.jpg?alt=media&token=f63d2d9d-d049-49b3-a26c-c9d3d619f288" alt="..." />
                        <div class="card-body p-4">
                          <div class="text-center">
                            <h5 class="fw-bolder">  UV 09 </h5>
                            <button className="botonesmaquinas2"><Maquina09/></button>
                           </div>
                        </div>
                       </div>
                       
                    </div>
                </div>
              
        </div>
        </div>
        </div>
    )
}

export default Maquinas