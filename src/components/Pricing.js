
import { useState } from 'react';
import ContactForm from './ContactForm';
import PricingCard from './PricingCard';
import { AnimatePresence, motion } from 'framer-motion';

const text = [
  {
    title: 'Starter',
    price: '80',
    description: 'Para impulsar la automatización en despachos y asesorías de más de dos personas y decenas de clientes.',
    featured: false,
    custom: false,
    benefits: [
      '3000 ejecuciones / mes',
      '0,02 € por ejecución excedida',
      'Soporte técnico personalizado'
    ]
  },
  {
    title: 'Profesional',
    price: '150',
    description: 'Para despachos y asesorías con más de dos personas y nuemrosos clientes.',
    featured: true,
    custom: false,
    benefits: [
      '8000 ejecuciones / mes',
      '0,01 € por ejecución excedida',
      'Soporte técnico personalizado'
    ]
  },
  {
    title: 'Enterprise',
    price: 'A medida',
    description: 'Cuéntanos lo que necesitas y crearemos la solucion que mejor se ajuste.',
    featured: false,
    custom: true,
    benefits: [
      'Solución a medida',
      'Soporte técnico personalizado',
      'Adaptada a tus necesidades'
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
          <h1 className='heading1'>Planes disponibles</h1>
          <hr/>
          <div className='pricing-cards'>
            {text.map((p, i) => {
              return (
                <PricingCard 
                  key={i}
                  featured={p.featured}
                  custom={p.custom}
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