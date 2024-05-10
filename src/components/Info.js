import underline from "../images/underline.png";
import underline2 from "../images/underline3.png";

export default function Info() {
  return (
    <div className='container light'>
      <div className='wrapper info'>
        <div className='content light'>
          <div style={{position: 'relative'}}>
            <h1>"Somos capaces de liberar a tu equipo de hasta un 86% de su tiempo diario."</h1>
            <div className='info-underline-1' style={{backgroundImage: `url(${underline})`}}/>
          </div>
          <div className="title">  
            <h2>Es fácil imaginar cuánto se puede crecer con todo ese tiempo disponible.</h2>
            <h3>Desde la mejora de la actual atención al cliente hasta la ampliación del abanico de servicios ofertado con aquellos de más valor añadido.</h3>
          </div>
          <div >
            <h1 style={{textAlign: 'right'}}>"Simplemente a través de software es posible conseguirlo."</h1>
            <div className='info-underline-2' style={{backgroundImage: `url(${underline2})`}}/>
          </div>
        </div>
      </div>
    </div>
  )
}
