import {Case6SVG, Case7SVG, Case8SVG } from '../images/Cases';
import point from '../images/round.png';


export default function UseCases() {
  return (
    <div id='product' className='container dark'>
      <div className='wrapper'>
        <div className='cases-content dark'>
          <h1>Casos de uso</h1>
          <div className="cases-container">
            <div className="case">
              <div className='case-image'>
                <Case7SVG/>
              </div>
              <div className='case-content'>
                <h2>Departamentos jurídicos y despachos de abogados</h2>
                <div className='case-point'><div className='point' style={{backgroundImage: `url(${point})`}}/><p>Gestión de documentacion en demandas colectivas</p></div>
                <div className='case-point'><div className='point' style={{backgroundImage: `url(${point})`}}/><p>Redacción de documentos en plantilla automáticamente</p></div>
                <div className='case-point'><div className='point' style={{backgroundImage: `url(${point})`}}/><p>Comunicaciones recurrentes con clientes</p></div>
                <div className='case-point'><div className='point' style={{backgroundImage: `url(${point})`}}/><p>Redacción de documentos legales</p></div>
              </div>
            </div>
            <div className="case reverse-query">
              <div className='case-content'>
                <h2>Contable/Fiscal</h2>
                <div className='case-point'><div className='point' style={{backgroundImage: `url(${point})`}}/><p>Descarga automática de documentación de la AEAT</p></div>
                <div className='case-point'><div className='point' style={{backgroundImage: `url(${point})`}}/><p>Descarga de facturas automática de clientes</p></div>
                <div className='case-point'><div className='point' style={{backgroundImage: `url(${point})`}}/><p>Automatiza descarga de borradores de la renta</p></div>
                <div className='case-point'><div className='point' style={{backgroundImage: `url(${point})`}}/><p>Divide, une y transforma documentos</p></div>
              </div>
              <div className='case-image'>
                <Case8SVG/>
              </div>
            </div>
            <div className="case">
              <div className='case-image'>
                <Case6SVG/>
              </div>
              <div className='case-content'>
                <h2>Laboral</h2>
                <div className='case-point'><div className='point' style={{backgroundImage: `url(${point})`}}/><p>Contacto directo con sistema RED</p></div>
                <div className='case-point'><div className='point' style={{backgroundImage: `url(${point})`}}/><p>Gestión automática de documentación con Seguridad Social</p></div>
                <div className='case-point'><div className='point' style={{backgroundImage: `url(${point})`}}/><p>Control de certificados digitales</p></div>
                <div className='case-point'><div className='point' style={{backgroundImage: `url(${point})`}}/><p>Descarga automáticamente informes ITA</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}