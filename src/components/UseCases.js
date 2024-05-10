import Case from "./Case"


const casesJuridicos = [
  {
    title: 'Generación de documentos',
    description: 'Contratos, ofertas... lo que tú necesites.',
    icon: 1
  },
  {
    title: 'Emails',
    description: 'Envío automático de emails con información relevante para tus clientes.',
    icon: 2
  },
  {
    title: 'Descarga de documentos',
    description: 'Borradores de la renta, informes de plataformas de terceros (Seguridad Social, AEAT, Intrastat...).',
    icon: 3
  },
  {
    title: 'Cumplimentación',
    description: 'Rellenar formularios, completar reclamaciones...',
    icon: 4
  },
  {
    title: 'Generación de documentos',
    description: 'Contratos, ofertas... lo que tú necesites.',
    icon: 1
  },
  {
    title: 'Lo que necesites',
    description: 'Contáctanos para conocer todas las funcionalidades disponibles.',
    icon: 5
  },
]
const casesFiscal = [
  {
    title: 'Generación de documentos',
    description: 'Contratos, ofertas... lo que tú necesites.',
    icon: 1
  },
  {
    title: 'Emails',
    description: 'Envío automático de emails con información relevante para tus clientes.',
    icon: 2
  },
  {
    title: 'Descarga de documentos',
    description: 'Borradores de la renta, informes de plataformas de terceros (Seguridad Social, AEAT, Intrastat...).',
    icon: 3
  },
  {
    title: 'Cumplimentación',
    description: 'Rellenar formularios, completar reclamaciones...',
    icon: 4
  },
  {
    title: 'Generación de documentos',
    description: 'Contratos, ofertas... lo que tú necesites.',
    icon: 1
  },
  {
    title: 'Lo que necesites',
    description: 'Contáctanos para conocer todas las funcionalidades disponibles.',
    icon: 5
  },
]
const casesLaboral = [
  {
    title: 'Generación de documentos',
    description: 'Contratos, ofertas... lo que tú necesites.',
    icon: 1
  },
  {
    title: 'Emails',
    description: 'Envío automático de emails con información relevante para tus clientes.',
    icon: 2
  },
  {
    title: 'Descarga de documentos',
    description: 'Borradores de la renta, informes de plataformas de terceros (Seguridad Social, AEAT, Intrastat...).',
    icon: 3
  },
  {
    title: 'Cumplimentación',
    description: 'Rellenar formularios, completar reclamaciones...',
    icon: 4
  },
  {
    title: 'Generación de documentos',
    description: 'Contratos, ofertas... lo que tú necesites.',
    icon: 1
  },
  {
    title: 'Lo que necesites',
    description: 'Contáctanos para conocer todas las funcionalidades disponibles.',
    icon: 5
  },
]

export default function UseCases() {
  return (
    <div id='product' className='container dark'>
      <div className='wrapper'>
        <div className='cases-content dark'>
          <h1>Casos de uso</h1>
          <div className="cases-container">
            {casesJuridicos.map((c, i) => {
              return (
                <Case key={i}
                title={c.title}
                description={c.description}
                icon={c.icon}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}