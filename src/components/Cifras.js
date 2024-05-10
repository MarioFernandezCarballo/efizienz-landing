import round from '../images/round3.png';
import underline from "../images/underline.png";
import underline2 from "../images/underline2.png";
import underline3 from "../images/underline3.png";

export default function Cifras() {
  return (
    <div className='container light'>
      <div className='wrapper info'>
        <div className='content cifras light'>
          <div>
            <h1>Cifras</h1>
          </div>
          <div className='grid'> 
            <div className='item'>
              <h3>10% de tareas diarias son automatizables</h3>
              <div className='info-underline-1' style={{backgroundImage: `url(${underline})`}}/>
              <div className='round1' style={{backgroundImage: `url(${round})`}}/>
            </div>
            <div className='item'>
              <h3>10 horas ahorradas a la semana</h3>
              <div className='info-underline-1' style={{backgroundImage: `url(${underline2})`}}/>
              <div className='round2' style={{backgroundImage: `url(${round})`}}/>
            </div>
            <div className='item'>
              <h3>Solo un 4% de las empresas lo aprovechan</h3>
              <div className='info-underline-1' style={{backgroundImage: `url(${underline3})`}}/>
              <div className='round3' style={{backgroundImage: `url(${round})`}}/>
            </div>
            <div className='item'>
              <h3>100% de mejora e experiencia de empleados</h3>
              <div className='info-underline-1' style={{backgroundImage: `url(${underline})`}}/>
              <div className='round1' style={{backgroundImage: `url(${round})`}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}