import InfoSVG from '../images/InfoSVG';

export default function Info() {
  return (
    <div className='container light'>
      <div className='wrapper info' style={{flexDirection: 'column'}}>
        <div className='info-quotes'>
          <div id='us'>
            <h2>"Somos capaces de liberar a tu equipo de hasta un 86% de su tiempo diario."</h2>
          </div>
        </div>
        <div className='info-content'>
          <div className="title">  
            <h1 className="heading1">Es fácil imaginar cuánto se puede crecer con todo ese tiempo disponible.</h1>
            <hr/>
            <h3 className="subtitle">Desde la mejora de la actual atención al cliente hasta la ampliación del abanico de servicios ofertado con aquellos de más valor añadido.</h3>
          </div>
          <InfoSVG />
        </div>
      </div>
    </div>
  )
}
