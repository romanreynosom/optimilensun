
import React from "react"
import "./loading.css"
import videoCargando from "../foto/videos/videoCargando.mp4"
import ReactPlayer from "react-player"
function Cargando(){
    return(
       
      <div className="load">
         <ReactPlayer
          url={videoCargando}
          height="100%"
          width="100%"
          controls
          playing={true}
      
          className="react-player"        
          />

        </div>
    )
}

export default Cargando