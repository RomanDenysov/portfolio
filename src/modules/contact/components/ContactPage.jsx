import { motion, useAnimation } from "framer-motion"
import styled from "styled-components"

import FlexContainer from '@styled/components/FlexContainer'

import { SiBuymeacoffee } from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useEffect } from "react";

const ContactContainer = styled(motion.div)`
		height: 100vh;
		width: 100%;
		scroll-snap-align: start;
		background-color: ${props => props.theme.colors.background};
`
const ContactField = styled(motion.div)`
	max-width: 1200px;
	height: 100%;
	margin: auto;
	padding: 2rem;

	display: grid; 
	grid-template-columns: 1fr 1fr; 
	grid-template-rows: 1fr 5rem; 
	gap: 1rem; 
	grid-template-areas: 
		"links form"
		"info form"; 
	justify-content: center;
	align-content: center;
	align-items: stretch;
	justify-items: stretch;
`
const ContactCard = styled(motion.div)`
	grid-area: form;
	align-self: stretch;
	padding: 2.8rem 2.4rem 3rem 2.4rem; 
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0 2px 14px 1px rgba(0, 0, 0, 0.4);
    position: relative;
	height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
	border-radius: 0 50px 0 0;
	box-shadow: 0 2px 14px 1px rgba(0, 0, 0, 0.4);
`
const ContactTitle = styled(motion.h2)`
	font-size: clamp(1rem, 2vw, 2rem);
	font-weight: 700;
	letter-spacing: -0.1rem;
	line-height: 100%;
	margin: 0;
	padding: 0.2rem;
	user-select: none;
`
const ContactSpan = styled(motion.p)`
	font-size: clamp(0.4rem, 1vw, 1rem);
	font-weight: 200;
	letter-spacing: 0rem;
	line-height: 100%;
	user-select: none;
	text-align: center;
	span {
		font-weight: 600;
		user-select: text;
	}
	margin: 0;
	padding: 0.2rem;
`
const ContactForm = styled(motion.form)`
	height: 100%;
	width: 100%;

	margin: 0;
	padding: 2rem 0 4rem 0;

	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: start;
	gap: 0.2rem;
`
const ContactFormLabel = styled(motion.label)`
	font-size: 1.2rem;
	text-align: start;
	font-weight: 500;
	line-height: 100%;
	margin: 0;
`
const ContactInput = styled(motion.input)`
	width: 100%;
	font-size: clamp(0.4rem, 1vw, 1.1rem);
	padding: 0.6rem;
	font-weight: 300;
	letter-spacing: 1;
	&:focus {
		outline: none;
	}
`
const ContactTextArea = styled(motion.textarea)`
	width: 100%;
	border-radius: 0 50px 0 0;
	padding: 0.6rem 0.7rem 0.6rem 0.6rem;

	resize: none;

	font-size: clamp(0.6rem, 1vw, 1.4rem);
	font-weight: 300;
	letter-spacing: 1;
	font-family: 'Poppins', sans-serif;
	&:focus {
		outline: none;
	}
`
const ContactFormButton = styled(motion.button)`
	width: 10.4rem;
	height: 4.2rem;

	color: ${props => props.theme.colors.primary};
	background-color: ${props => props.theme.colors.text};
	
	border: 3px solid ${props => props.theme.colors.text};

	display: flex;
	align-items: center;
	justify-content: center;
    
	font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0.01rem;
    cursor: pointer;
	&:hover {
		border-radius: 20px;
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.text};
	}
`
const InfoBox = styled(motion.div)`
	grid-area: info;
`
const LinkBox = styled(motion.div)`
	align-self: stretch;
	width: 100%;
	height: 100%;
	grid-area: links;
	display: grid; 
	grid-template-columns: 1fr 1fr; 
	grid-template-rows: 1fr 1fr; 
	gap: 1rem; 
	grid-template-areas: 
		"link github"
		"coffee coffee";

	justify-content: center;
	align-content: center;
	align-items: stretch;
	justify-items: stretch;
`
const SocialLink = styled(motion.a)`
	grid-area: ${props => props.gridArea};
    align-self: stretch;
    background-color: ${props=>props.color};
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
	box-shadow: 0 2px 14px 1px rgba(0, 0, 0, 0.4);;
    .icon {
        font-size: 4rem;
    }
    &:hover {
        scale: 0.98;
		border-radius: 100px;
        background-color: ${props=>props.color};
        color: ${props => props.theme.colors.primary};
    }
	&:first-child {
		border-radius: 0 0 100px 0;
	}
	&:hover:first-child {
		border-radius: 100px;
	}
`
const CoffeeLink = styled(motion.a)`
	grid-area: coffee;
	align-self: stretch;

    font-family: 'Cookie', cursive;
    background-color: ${props=>props.color};
    color: ${props => props.theme.colors.text};
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
	box-shadow: 0 2px 14px 1px rgba(0, 0, 0, 0.4);
    gap: .4rem;
    .icon {
        font-size: 4rem;
    }
    &:hover {
        scale: 0.98;
        border-radius: 100px;
        background-color: ${props=>props.color};
    }
`




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

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        },
    }
}
const variants = {
    initial:{
        x: 0,
        y: 200,
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



const ContactPage = () => {
	const controls = useAnimation()

    useEffect(()=> {
        controls.start({opacity: 1})
    }, [controls])

	return (
		<ContactContainer 
			variants={variants}
			initial="initial"
			whileInView="animate">
				<ContactField>
					<LinkBox>
							{/* Разметка кнопок */}
						<SocialLink 
							gridArea='link'
							variants={variantsBtn} 
							color='#0077B5'
							whileHover={{scale: 1.05}}
							whileTap={{ scale: 0.95 }}
							transition={{type: "spring", stiffness: 400, damping: 20 }}>
								<FaLinkedinIn className="icon"/>
						</SocialLink>
						<SocialLink
							gridArea='github'
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
					<ContactCard
						variants={itemVariants}
						initial="hidden"
						whileInView="visible">
						<ContactTitle>Get in touch</ContactTitle>
						<ContactSpan>or shoot me an email directly on: <span>romandenysovsk@gmail.com</span></ContactSpan>
						<ContactForm>
							<FlexContainer style={{height: '4rem'}} justify='space-between' gap='2rem' align='center'>
								<FlexContainer direction='column' justify='flex-start' align='start' gap='0.2rem'>
									<ContactFormLabel>Name</ContactFormLabel>
									<ContactInput placeholder="Enter Your Name"/>
								</FlexContainer>
								<FlexContainer direction='column' justify='flex-start' align='start' gap='0.2rem'>
									<ContactFormLabel>Email</ContactFormLabel>
									<ContactInput placeholder="Enter Your Email"/>
								</FlexContainer>
							</FlexContainer>
							<ContactFormLabel style={{marginTop: '1rem'}}>Message</ContactFormLabel>
							<ContactTextArea placeholder="Write Your Message" name="message" id="text" cols="0" rows="20"/>
							<ContactFormButton 
								style={{marginTop: '1rem'}}
								variants={itemVariants}
								whileHover={{scale: 1.05}}
								whileTap={{ scale: 0.95 }}
								transition={{type: "spring", stiffness: 400, damping: 20 }}>
									SUBMIT</ContactFormButton>
						</ContactForm>
					</ContactCard>
					<InfoBox>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime a est, facilis quis atque natus repellendus placeat possimus odio aut accusantium minima ex dolorem totam neque voluptates maiores. Maxime, provident.
					</InfoBox>
				</ContactField>
		</ContactContainer>
	)
}

export default ContactPage