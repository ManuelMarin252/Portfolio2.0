// LanguageContext.tsx

import { createContext, useState, useEffect, type FC, type ReactNode } from 'react'

// Definimos el tipo para el contexto
interface LanguageContextType {
  language: 'es' | 'en'
  changeLanguage: () => void
}

// Creamos el contexto
const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  changeLanguage: () => {}
})

// Creamos un componente proveedor para envolver nuestra aplicación
export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // Estado para almacenar el idioma actual
  const [language, setLanguage] = useState<'es' | 'en'>(navigator.language.split('-')[0] as 'es' | 'en')

  // Función para cambiar el idioma
  const changeLanguage = () => {
    if (language === 'es') {
      setLanguage('en')
    }
    if (language === 'en') {
      setLanguage('es')
    }
  }
  useEffect(() => {
    const userLanguage = navigator.language.split('-')[0]
    // Si el idioma es 'es' o 'en', establecerlo directamente
    if (userLanguage === 'es' || userLanguage === 'en') {
      setLanguage(userLanguage)
    } else {
      // Si es cualquier otro idioma, establecer en inglés por defecto
      setLanguage('en')
    }
  }, [])
  useEffect(() => {
    console.log(language)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
