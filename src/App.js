import React, {useState, useEffect} from "react";
import ReactPlayer from "react-player";
import {
    BrowserRouter as Router,
    Route,
    Routes,
   
  } from "react-router-dom";
  import Optimizar from "./inicio/inicio";

import BackDiseño from "./lensun/backDiseño/backDiseño";
import Videos from "./lensun/videos/videos";
import Cabeza from "./lensun/header/header";
import Pie from "./lensun/pie/pie";

import Lensun from "../src/lensun/lensun principal/principla/lensun";
import Maquinas from "./lensun/lensun principal/maquinas/maquinas";
import MaquinasUv from "./lensun/lensun principal/maquinas uv/maquinasuv";
import Glitter from "./lensun/lensun principal/gliter/glitter";

import Cargando from "./inicio/loading/loading";
import Mark from "./mark/mark";
import Maxxa from "./maxxa/maxxa"
import videoLogin from "./inicio/foto/videos/videoCargando.mp4"










function App  () { 
  /*const [isLoading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 6000);
  })*/
    return(
      /*<div> 
       {isLoading===true?*/
         
        <Router>
        
        <Cabeza />
        <Routes>
        
        <Route path="/" element= {<Lensun />} />;
        <Route path="/glitter" element= {<Glitter />} />;
        <Route path="/maquinasuv" element= {<MaquinasUv />} />;   
        <Route path="/maquinas" element={<Maquinas />} />;    
        <Route path="/videos" element= {<Videos />} />;
        <Route path= "/lensun" element= {<Lensun />} />;
        <Route path="/back" element={<BackDiseño />} />;
      
        <Route path="/mark" element={<Mark />} />;
        <Route path="/maxxa" element={<Maxxa />} />
        
        </Routes>
     
        <Pie />
        </Router>/*}
        </div>*/
    )
  
    }
  
  

export default App