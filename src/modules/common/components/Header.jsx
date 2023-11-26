import FlexContainer from '@styled/components/FlexContainer'
import WrapperContainer from '@styled/components/WrapperContainer'
import Logo from '@styled/components/Logo'
import { Link, Outlet } from 'react-router-dom'


import styled from 'styled-components'

import { useLanguage } from '@language/LanguageProvider'
import { motion } from 'framer-motion'
import Switcher from '../../language/Switcher'
import { useEffect, useState } from 'react'



// Стилі компонента 
const HeaderContainer = styled(motion.div)`
    max-width: 100%;
    height: 7vh;
    background-color: ${props => props.theme.colors.primary};
    position: sticky;
    top: 0;
    z-index: 99;
`
const TabsContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;
    
`
const NavLink = styled(motion(Link))`
    width: 5.8rem;
    height: 2.4rem;
    color: ${props => (props.active ? '#0D0D0D' : '#feffff')};
    border: 2px solid ${props => props.theme.colors.text};
    background-color: ${props => (props.active ? '#FFDD00' : '#0D0D0D')};
    border-radius: 50px;
    
    font-size: clamp(0.6rem, 1vw, 0.8rem);
    font-weight: 300;
    letter-spacing: -0.02rem;
    padding: 0.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    
    position: relative;
    z-index: 2;


    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.text};
    }
`


// Framer-motions настройки
const visible = {
    opacity: 1,
    y: 0,
    transition: {
        duration: 0.5,
        staggerChildren: 0.1
    },
}
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible
}



const Header = () => {
    const { language, texts } = useLanguage()
    const [isActive, setIsActive] = useState('/')

    useEffect(() => {
        setIsActive(location.pathname);
      }, [location.pathname]);

    return (
        <>
        <HeaderContainer 
            initial='hidden'
            animate='visible'
            variants={itemVariants}>
            <WrapperContainer>
                <FlexContainer align='center' justify='space-between'>
                    <Logo/>
                    <TabsContainer>
                        <NavLink
                            active={isActive === '/'}
                            onClick={()=>handleLink('/')}
                            to="/"
                            variants={itemVariants}
                            whileHover={{scale: 1.05}}
                            whileTap={{ scale: 0.95 }}
                            transition={{type: "spring", stiffness: 400, damping: 20 }}>
                                {texts[language].about.toUpperCase()}
                        </NavLink>
                        <NavLink
                            active={isActive === '/work'}
                            onClick={()=>handleLink('/work')}
                            to="/work"
                            variants={itemVariants}
                            whileHover={{scale: 1.05}}
                            whileTap={{ scale: 0.95 }}
                            transition={{type: "spring", stiffness: 400, damping: 20 }}>
                            {texts[language].work.toUpperCase()}
                        </NavLink>
                        <NavLink
                            active={isActive === '/contact'}
                            onClick={()=>handleLink('/contact')}
                            to="/contact"
                            variants={itemVariants}
                            whileHover={{scale: 1.05}}
                            whileTap={{ scale: 0.95 }}
                            transition={{type: "spring", stiffness: 400, damping: 20 }}>
                            {texts[language].contact.toUpperCase()}
                        </NavLink>
                    </TabsContainer>
                        <Switcher/>
                </FlexContainer>
            </WrapperContainer>
        </HeaderContainer>
        
        <Outlet/>

        </>
    )
}

export default Header