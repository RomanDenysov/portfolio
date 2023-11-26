import { motion, useAnimation } from "framer-motion"
import styled from "styled-components"
import { TbArrowUpRight } from "react-icons/tb";
import ProjectData from './dummydata'
import FlexContainer from '@styled/components/FlexContainer'
import { useEffect } from "react";

const getRandomBorderRadius = () => {
    const borders = ["border-radius: 30px 50px 0 5px;", "border-radius: 50px 0 25px 0;", "border-radius: 0 40px 0 50px;", "border-radius: 70px 0 50px 30px;"];
    const randomIndex = Math.floor(Math.random() * borders.length);
    return borders[randomIndex];
};

  
const GridViewContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    padding: 2rem 0;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        width: 0;
    }
`
const GridCard = styled(motion.div)`
    width: 100%;
    height: auto;
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fill, 15rem);
    grid-auto-rows: minmax(15rem, auto);
    grid-gap: 1.2rem;
    justify-items: center;
    align-items: center;
    align-content: stretch;
    justify-content: center;
`
const ProjectImage = styled(motion.img)`
    width: 100%;
    height: 88%;
    object-fit: cover;
    cursor: pointer;
    ${(props) => getRandomBorderRadius()};
    transition: all 0.3s ease;

`
const ProjectItem = styled(motion.div)`
    grid-column: span 1;
    grid-row: span 1;
    align-self: stretch;
    width: 15rem;
    height: 15rem;
    padding: 0.2rem;
    background-color: ${props => props.theme.colors.primary};
    &:nth-child(3n) {
        grid-column: span 2;
        grid-row: span 2;
        background-color: ${props => props.theme.colors.background};
        width: 31rem;
        height: 31rem;
    }
    box-shadow: 0 2px 14px 1px rgba(0, 0, 0, 0.4);
    &:hover ${ProjectImage}{
        border-radius: 5px;
    }
    border-radius: 5px;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const ProjectBox = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 0.6rem 1rem 0.6rem ;
    height: 3rem;
    width: 100%;
`
const ProjectTitle = styled(motion.h3)`
    font-size: clamp(0.4rem, 1.4vw, 1.2rem);
    text-align: start;
    font-weight: 800;
    letter-spacing: 0rem;
    user-select: none;
    line-height: 100%;
`
const ProjectDescr = styled(motion.span)`
    font-size:  clamp(0.4rem, 1vw, 1rem);
    font-weight: 400;
    user-select: none;
    line-height: 100%;
`
const ProjectButton = styled(motion.button)`
    padding: 0.2rem;
    border: 2px solid black;
    background-color: ${props => props.theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(1.8rem - 20%);
    cursor: pointer;
    &:hover {
        border-radius: 50%;
    }
`



const variantsItem = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 70,
        }
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
const variantsBox = {
    initial:{
        x: 0,
        y: 30,
        opacity: 0,
    },
    animate: {
        x: [0, 100, 0],
        y: 0,
        opacity: 1,
        transition: {
            type: "spring", 
            stiffness: 70,
            staggerChildren: 0.2
        },
    },
}

const GridBox = () => {
    const controls = useAnimation()

    useEffect(()=> {
        controls.start({opacity: 1})
    }, [controls])


    return (
        <GridCard
            variants={variants}
            initial="initial"
            whileInView="animate">
            {ProjectData.map((data, key) => (
                <ProjectItem 
                    key={key} 
                    variants={variantsBox}
                    initial="initial"
                    whileInView="animate" 
                    >
                    <ProjectImage src={data.img} />
                    <ProjectBox>
                        <FlexContainer justify='center' align='start' direction='column' gap='0.4rem'>
                            <ProjectTitle>{data.title.toUpperCase()}</ProjectTitle>
                            <ProjectDescr>{data.content.toUpperCase()}</ProjectDescr>
                        </FlexContainer>
                        <ProjectButton
                            variants={variantsBox}
                            whileHover={{scale: 1.05}}
                            whileTap={{ scale: 0.95 }}
                            transition={{type: "spring", stiffness: 400, damping: 20, transition: 2}}><TbArrowUpRight /></ProjectButton>
                    </ProjectBox>
                </ProjectItem>
            ))}
        </GridCard>
    )
}


export default function GridView() {
    return (
        <GridViewContainer>
            <GridBox/>
        </GridViewContainer>
    )
}
