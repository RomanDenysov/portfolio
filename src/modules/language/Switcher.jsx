import { motion } from "framer-motion"
import styled, {css} from "styled-components"
import { useLanguage } from '@language/LanguageProvider'




const Handle = styled(motion.div)`
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .7rem;
    font-weight: 700;
    user-select: none;
    
`
const SwitchBox = styled(motion.div)`
    width: 3.6rem;
    height: 2.2rem;
    background-color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 45px;
    padding: 0.2rem;
    cursor: pointer;
    border: 2px solid ${props => props.theme.colors.text};
    ${props=>props => props.isLanguageSwitched && css`
        justify-content: flex-end;
    `}
    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    }
    &:hover ${Handle} {
        background-color: ${props => props.theme.colors.text};
        color: ${props => props.theme.colors.secondary};
    }
`



const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
}

export default function Switcher({itemVariants}) {
    const { language, changeLanguage } = useLanguage()

	const toggleLanguage = () => {
		const newLanguage = language === 'en' 
			? 'ua'
			: 'en';
		changeLanguage(newLanguage)
	}

  return (
    <SwitchBox 
        onClick={toggleLanguage} 
        isLanguageSwitched={language === 'ua'}
        variants={itemVariants}
        whileHover={{scale: 1.05}}
        whileTap={{ scale: 0.95 }}
        transition={{type: "spring", stiffness: 400, damping: 30 }}>
        <Handle layout transition={spring}>{language.toUpperCase()}</Handle>
    </SwitchBox>
  )
}
