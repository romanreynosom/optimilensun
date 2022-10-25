import React from "react";
import LensunHeader from "../../header/headerlensun";
import ReactPlayer from "react-player"
import "./lensun.css"


function Lensun(){
    return(
       <>
       <header />
      
        <body>
        <LensunHeader/>
        <section>
          <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5">
                      <div className="principal"> 
                        <div class="card h-100">
                            <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/lensuncaba.appspot.com/o/maquinas%2Fmaquina%20lensun%20custom.jpg?alt=media&token=5937b0ec-dfd0-4481-963a-dfa9d69f790e" />
                            <div class="card-body p-4">
                              <div class="text-center">
                                <h5 class="fw-bolder">Lensun Maquinas</h5>
                               <a href="maquinas">  <button type="button" class="btn btn-primary">VER MAS</button></a>
                               </div>
                            </div>
                            </div>  
                            
                        </div>
                    </div>
                  
                    <div class="col mb-5">
                    <div className="principal">
                        <div class="card h-100">
                            <img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/lensuncaba.appspot.com/o/films%20frontal%2Ffilm%20frontal.jpg?alt=media&token=27de322f-2443-4567-9040-2f80f62ffc25" alt="..." />
                            <div class="card-body p-4">
                              <div class="text-center">
                                <h5 class="fw-bolder">Film Frontal</h5>
                                <a href=""><button type="button" class="btn btn-primary">VER MAS</button> </a> 
                               </div>
                            </div>
                           </div>
                           
                        </div>
                    </div>
                    <div class="col mb-5">
                    <div className="principal">
                        <div class="card h-100">
                            <img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/lensuncaba.appspot.com/o/back%2Fback%20inicial.jpg?alt=media&token=fe6bf978-24c0-49b8-b3e9-3d8bb9fb08ef" alt="imagen de back" />
                            <div class="card-body p-4">
                              <div class="text-center">
                                <h5 class="fw-bolder">Back Diseños</h5>
                               <a href="back"><button type="button" class="btn btn-primary">VER MAS</button> </a> 
                               </div>
                            </div>
                           
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                    <div className="principal">
                        <div class="card h-100">
                            <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/lensuncaba.appspot.com/o/back%2Fglitter%2Fgliter%20principal.jpg?alt=media&token=03978cda-8513-4f9f-8038-324dd9e1aad7" alt="..." />
                            <div class="card-body p-4">
                              <div class="text-center">
                                <h5 class="fw-bolder">Back Glitter</h5>
                               <a href="glitter">  <button type="button" class="btn btn-primary">VER MAS</button></a>
                               </div>
                            </div>
                           </div>
                            
                        </div>
                    </div><div class="col mb-5">
                    <div className="principal">
                        <div class="card h-100">
                            <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/lensuncaba.appspot.com/o/films%20tablet%2Ffilms%20tablet.jpg?alt=media&token=f982a1b4-ec27-4b8f-ba7a-e0fc2c26bb66" alt="..." />
                            <div class="card-body p-4">
                              <div class="text-center">
                                <h5 class="fw-bolder">Films Tablet</h5>
                                <button type="button" class="btn btn-primary">VER MAS</button>
                               </div>
                            </div>
                           
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                    <div className="principal">
                        <div class="card h-100">
                          <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/lensuncaba.appspot.com/o/videos%2Ffotovideo.jpeg?alt=media&token=05ca065b-2cd9-4257-9962-f99e93208b16" alt="..." />
                            <div class="card-body p-4">
                              <div class="text-center">
                                <h5 class="fw-bolder">Videos</h5><br></br>
                                <a href="videos"><button type="button" class="btn btn-primary">VER MAS</button> </a> 
                               </div>
                            </div>
                           
                            </div>
                        </div>
                    </div>



                    </div>
                    </div>      
        </section>
     </body>   
    
     </>
     
     )
}


export default Lensun