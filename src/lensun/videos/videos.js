
import ReactPlayer from "react-player"
import LensunHeader from "../header/headerlensun"
import "./videos.css"

function Videos(){
    return(
        <div className="prinVid">
          <div className="row q-mb-md justify-between"> 
    
    <LensunHeader />
 <div class= "conteiner"> 
   <div class= "row">
      <div className="col-sm" > 
        <h4>nuevos diseños</h4>
         <ReactPlayer url="https://firebasestorage.googleapis.com/v0/b/lensuncaba.appspot.com/o/videos%2FWhatsApp%20Video%202022-09-01%20at%2015.02.51.mp4?alt=media&token=31b6df90-1ab5-46ea-ae7b-8717c7c0d82d" controls  />     
      </div>
      <div class="col-sm"> 
      <h4>xxxxxxx</h4>
          <ReactPlayer url="https://firebasestorage.googleapis.com/v0/b/lensuncaba.appspot.com/o/videos%2FWhatsApp%20Video%202022-09-01%20at%2015.02.50.mp4?alt=media&token=e30f4c7d-c2b5-4ea0-a6b6-23e5576182fc" controls />     
      </div>
      
      <div class="col-sm"> 
      <h4>xxxxxxx</h4>
          <ReactPlayer url="https://firebasestorage.googleapis.com/v0/b/lensuncaba.appspot.com/o/videos%2FWhatsApp%20Video%202022-09-01%20at%2015.03.04.mp4?alt=media&token=7ac301a0-211a-4e8f-84ad-d7da92f67266" controls />     
      </div>
     
      <div class="col-sm"> 
      <h4>xxxxxxx</h4>
          <ReactPlayer url="https://firebasestorage.googleapis.com/v0/b/lensuncaba.appspot.com/o/videos%2FWhatsApp%20Video%202022-09-01%20at%2015.55.56.mp4?alt=media&token=93c82e76-22c4-4852-926e-9e333aae4d74" controls />     
      </div>

    
     
    </div>
</div>
        

</div>
        </div>
    
    
    )
}

export default Videos