// Компонент предназначенный для смены языка в приложении - работает через глобальную обертку провайдера в компоненте App.jsx и с помощью хука useLanguage() в отдельных компонентах.

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext()

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('en')

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage)
    }
// Тут ми виписуємо варіанти перекладів серед яких зможемо потім обирати необхідний
    const texts = {
        en: {
            about: 'About',
            work: 'Work',
            prices: 'Prices',
            contact: 'Contact',
        },
        ua: {
            about: 'Хто я',
            work: 'Роботи',
            prices: 'Ціни',
            contact: 'Контакти',
        },
    }
// Глобальний компонент-обкладинка-провайдер ))
    return (
        <LanguageContext.Provider value={{ language, changeLanguage, texts }}>
            {children}
        </LanguageContext.Provider>
    )
}
// Хук який пов'язує контекст і компоненти в єдине ціле. Використовується тільки всередині з LanguageProvider. Надалі на цьому етапі ми будемо швидше за все додавати тести 
const useLanguage=() => {
    const context = useContext(LanguageContext)
    if(!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context;
}

export { LanguageProvider, useLanguage }