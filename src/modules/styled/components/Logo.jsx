import { motion } from "framer-motion"
import styled from "styled-components"



// Стилі компонента 
const StyledLogo = styled(motion.span)`
		text-decoration: none;
		color: ${props => props.theme.colors.text};
		font-weight: 900;
		/* text-shadow:
			3px 3px 0 #000,
			-2px 2px 0 #000,
			2px -3px 0 #000,
			-3px -2px 0 #000; */
		letter-spacing: -0.25rem;
		font-size: 2rem;
		cursor: pointer;
		&:focus{
				outline: none;
		}
`

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

export default function Logo() {
	return <StyledLogo 
					variants={itemVariants}
					whileHover={{scale: 1.05}}
					whileTap={{ scale: 0.95 }}
					transition={{type: "spring", stiffness: 400, damping: 30 }}>
						denysov.
			</StyledLogo>
}
