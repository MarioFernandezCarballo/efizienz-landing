
import PricingCard from './PricingCard';

const text = [
  {
    title: 'Starter',
    price: '50',
    description: 'Para impulsar la automatización en despachos y asesorías de más de dos personas y decenas de clientes.',
    featured: false,
    benefits: [
      'Saldo de 3000 ejecuciones / mes',
      'Precio de 0,02 € por ejecución excedida',
      'Soporte técnico personalizado'
    ]
  },
]

export default function Pricing() {
  return (
    <div className='pricing-container'>
      <div className='pricing-wrapper light'>
        <h1>Planes disponibles</h1>
        <div className='pricing-content light'>
          {text.map((p, i) => {
            return (
              <PricingCard 
                key={i}
                featured={p.featured}
                title={p.title}
                price={p.price}
                description={p.description}
                benefits={p.benefits}
                />
            )
          })}
        </div>
      </div>
    </div>
  )
}