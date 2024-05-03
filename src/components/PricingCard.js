import CheckSVG from '../images/CheckSVG';

export default function PricingCard(props) {

  const handleClick = () => {
    props.handleClick(props.title)
    props.handleVisible(true)
  }

  return (
    <div className={`pricing-card ${props.featured && "pricing-card-featured"}`}>
      {props.featured &&
      <div className='pricing-badge'>
        Recomendado
      </div>
      }
      <div>
        <div className='pricing-card-header'>
          <h3>{props.title}</h3>
          <p><span>{props.price}€</span>/mes</p>
        <h4>{props.description}</h4>
        </div>
        <div className='pricing-card-benefits'>
          {props.benefits.map((b, i) => {
            return (
              <div key={i} className='pricing-card-benefit'>
                <div className='pricing-card-benefit-check'>
                    <CheckSVG />
                </div>
                <p>{b}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className='pricing-cta'>
        <a href='#form' onClick={() => {handleClick()}} className={`button ${props.featured && 'featured'}`}>Empecemos</a>
      </div>
    </div>
  )
}