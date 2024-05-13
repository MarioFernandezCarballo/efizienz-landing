
import { useState } from 'react';
import ContactForm from './ContactForm';
import PricingCard from './PricingCard';
import { AnimatePresence, motion } from 'framer-motion';

const text = [
  {
    title: 'Starter',
    price: '50',
    description: 'Para impulsar la automatización en despachos y asesorías de más de dos personas y decenas de clientes.',
    featured: false,
    benefits: [
      '3000 ejecuciones / mes',
      '0,02 € por ejecución excedida',
      'Soporte técnico personalizado'
    ]
  },
  {
    title: 'Profesional',
    price: '100',
    description: 'Para impulsar la automatización en despachos y asesorías de más de dos personas y decenas de clientes.',
    featured: true,
    benefits: [
      '8000 ejecuciones / mes',
      '0,01 € por ejecución excedida',
      'Soporte técnico personalizado'
    ]
  },
  {
    title: 'Enterprise',
    price: '200',
    description: 'Para impulsar la automatización en despachos y asesorías de más de dos personas y decenas de clientes.',
    featured: false,
    benefits: [
      '20000 ejecuciones / mes',
      '0,01 € por ejecución excedida',
      'Soporte técnico personalizado'
    ]
  },
]

export default function Pricing() {
  const [option, setOption] = useState(null)
  const [formVisible, setFormVisible] = useState(false)

  return (
    <div id='pricing' className='container light'>
      <div className='wrapper'>
        <div className='pricing-content'>
          <h1>Planes disponibles</h1>
          <div className='pricing-cards'>
            {text.map((p, i) => {
              return (
                <PricingCard 
                  key={i}
                  featured={p.featured}
                  title={p.title}
                  price={p.price}
                  description={p.description}
                  benefits={p.benefits}
                  handleClick={setOption}
                  handleVisible={setFormVisible}
                  />
              )
            })}
          </div>
          <div id='contact' className='doubts'>
            <p className='heading1'>¿Dudas?</p>
            <div className='pricing-cta'>
              <a href='#form' onClick={() => {setFormVisible(true)}} className={`button`}>Contáctanos</a>
            </div>
          </div>
          <AnimatePresence>
            {formVisible &&
            <motion.div 
            className='container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{duration: 1}}>
              <ContactForm option={option}
                options={text.map((p) => {return `${p.title} - ${p.price}€/mes`})}
                />
            </motion.div>
            }
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}