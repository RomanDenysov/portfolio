import WrapperContainer from '@styled/components/WrapperContainer'
import FlexContainer from '@styled/components/FlexContainer'

import { motion, useAnimation } from "framer-motion";

import { SiBuymeacoffee } from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import styled from "styled-components"

import { useEffect } from "react";




// Стилі компонента 
const AboutContainer = styled(motion.div)`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.colors.background};
    box-shadow: 1px 5px 15px 1px rgba(0, 0, 0, 0.2);
    scroll-snap-align: start;
`
const Name = styled(motion.h2)`
    text-align: start;
    font-size: 4rem;
    font-weight: 800;
    letter-spacing: -0.3rem;
    line-height: .9;
    z-index: 1;
    margin-top: 8rem;
    user-select: none;
    color: ${props => props.theme.colors.text};
`
const TitleBox = styled(motion.div)`
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .01rem;
    user-select: none;
    border-radius: 0 50px 0 0;
`
const Title = styled(motion.h1)`
    color: ${props => props.theme.colors.background};
    font-size: 10vw;
    font-weight: 900;
    line-height: 0.7;
    letter-spacing: -0.6rem;
    text-align: start;
    user-select: none;
`
const Descr = styled(motion.p)`
    margin-top: 2rem;
    color: ${props => props.theme.colors.text};
    font-size: 1.4rem;
    line-height: 1.2;
    text-align: center;
    font-weight: 400;
    letter-spacing: 0.2rem;
    margin-bottom: 3rem;
    position: relative;
    user-select: none;
    margin-left: 2rem;
`
const Line = styled(motion.div)`
    background-color: ${props => props.theme.colors.text};
    height: 2px;
    width: 2.4rem;
    position: absolute;
    top: .8rem;
    left: 0rem;
`
const LinkBox = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .2rem;
`
const SocialLink = styled(motion.a)`
    width: 4rem;
    height: 4rem;
    background-color: ${props=>props.color};
    color: ${props => props.theme.colors.primary};
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 1px 5px 10px 2px rgba(0, 0, 0, 0.2);
    .icon {
        font-size: 1.6rem;
    }
    &:hover {
        scale: 0.98;
        border-radius: 50%;
        background-color: ${props=>props.color};
        color: ${props => props.theme.colors.primary};
    }
`
const CoffeeLink = styled(motion.a)`
    width: 8rem;
    height: 4rem;
    font-family: 'Cookie', cursive;
    background-color: ${props=>props.color};
    color: ${props => props.theme.colors.text};
    font-size: .8rem;
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 1px 5px 10px 2px rgba(0, 0, 0, 0.2);
    gap: .01rem;
    .icon {
        font-size: 1rem;
    }
    &:hover {
        scale: 0.98;
        border-radius: 50px;
        background-color: ${props=>props.color};
    }
`



const variants = {
    initial:{
        x: 0,
        y: 400,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.3,
        },
    },
}
const variantsBtn = {
    initial:{
        x: -300,
        y: 0,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.2,
        },
    },
}


const AboutPage = () => {
    const controls = useAnimation()

    useEffect(()=> {
        controls.start({opacity: 1})
    }, [controls])

  return (
    <AboutContainer
        variants={variants}
        initial="initial"
        whileInView="animate">
    <WrapperContainer>
            <FlexContainer align='start' justify='center' direction='column'>
                {/* Разметка отсека с текстом и кнопками */}
                <Name variants={variants}
                style={{color: 'black'}}>Hey, I'm Roman</Name>
                <TitleBox 
                    variants={variants}
                    initial="initial"
                    whileInView="animate">
                    <Title>WEB DEVELOPER.</Title>
                </TitleBox>
                <Descr variants={variants}>
                <Line/>Specializing in frontend development, I build the frontend of websites and web applications, contributing to the success of the overall product.
                </Descr>
                <LinkBox>
                    {/* Разметка кнопок */}
                    <SocialLink 
                        variants={variantsBtn} 
                        color='#0077B5'
                        whileHover={{scale: 1.05}}
                        whileTap={{ scale: 0.95 }}
                        transition={{type: "spring", stiffness: 400, damping: 20 }}>
                            <FaLinkedinIn className="icon"/>
                    </SocialLink>
                    <SocialLink 
                        variants={variantsBtn} 
                        color='#2c2a2a'
                        whileHover={{scale: 1.05}}
                        whileTap={{ scale: 0.95 }}
                        transition={{type: "spring", stiffness: 400, damping: 20 }}>
                            <FaGithub className="icon"/>
                    </SocialLink>
                    <CoffeeLink 
                        variants={variantsBtn} 
                        color='#FFDD00'
                        whileHover={{scale: 1.05}}
                        whileTap={{ scale: 0.95 }}
                        transition={{type: "spring", stiffness: 400, damping: 20 }}>
                            <SiBuymeacoffee  className="icon"/>
                            Buy me a coffee
                    </CoffeeLink>
                </LinkBox>
            </FlexContainer>
    </WrapperContainer>
    </AboutContainer>
  )
}

export default AboutPage