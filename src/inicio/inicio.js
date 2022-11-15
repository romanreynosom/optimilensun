import React from "react"
import "./inicio2.css"
import productos from "../lensun/lensun principal/principla/len"

function Optimizar (){
    return(

        <div className="fondo">
         
         <section >
         <div className="divlogo"><img className="logo2" height={500} src={productos[14].img  }/></div>   
          <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5">
                      <div className="principal"> 
                        <div class="card h-100">
                            <a href="/maxxa"><img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/lensuncaba.appspot.com/o/logos%20marcar%2Fmaxxa2.png?alt=media&token=65e50cdd-50f2-4712-b94d-32cd363a6eed" /> </a> 
                            </div>  
                            
                        </div>
                    </div>
                    <div className="col mb-5">
                      <div className="principal">
                        <div class="card h-100">
                           <a href="/lensun"><img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/lensuncaba.appspot.com/o/logos%20marcar%2Flensun.jpg?alt=media&token=af3d8ad8-36c5-4eec-b73a-8d07a061f094" alt="..." /> </a>
                            
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                    <div className="principal">
                        <div class="card h-100">
                           <a href="/mark"><img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/lensuncaba.appspot.com/o/logos%20marcar%2Fmark.png?alt=media&token=e77c878e-bea4-4ddb-8c64-a0e2578792de" alt="..." /></a> 
                            
                           </div>
                           
                        </div>
                    </div>
                    <div class="col mb-5">
                    <div className="principal">
                        <div class="card h-100">
                          <a href="/wuw"><img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/lensuncaba.appspot.com/o/logos%20marcar%2Fwuw.png?alt=media&token=27d0b7e8-64e6-4d33-aeac-ffcfdcec8495" alt="imagen de back" /></a>  
                           
                           
                            </div>
                        </div>
                    </div>
                    
                   


                    </div>
                    </div>      
        </section>
        


        </div>
    )
}

export default Optimizar 