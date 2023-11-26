import { motion, scroll } from "framer-motion"
import styled from "styled-components"
import FlexContainer from '@styled/components/FlexContainer'
import { useState } from "react";
import ProjectData from './dummydata'


const RowViewContainer = styled(motion.div)`
    width: 100%;
    height: 70vh;
    overflow-y: scroll;
    margin-top: 6rem;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        width: 0;
    }
`
const WorkRow = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-end;
    margin-bottom: 1rem;
`;

const ProjectBox = styled(motion.div)`
    max-width: 42rem;
    max-height: 34rem;
    position: absolute;
    padding: 0 0 1rem 0;
    bottom: 0rem;
    left: 0rem;
    background-color: ${props => props.theme.colors.elements};
    border-radius: 50px 50px 0 0;

    display: flex;
    align-items: start;
    justify-content: flex-start;
    flex-direction: column;
    box-shadow: 1px 5px 15px 1px rgba(0, 0, 0, 0.2);
`
const ProjectImage = styled.img`
    width: 42rem;
    height: 30rem;
    object-fit: cover;
    border-radius: 50px 50px 0 0;
    filter: blur(0.5px);
    cursor: pointer;
`
const ProjectTechItem = styled(motion.span)`
    margin: .6rem;
    padding: 0.4rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: ${props => props.theme.colors.text};

    border: 2px solid;
    border-radius: 50px;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    user-select: none;
    z-index: 3;
`
const Title = styled(motion.h1)`
    font-size: 4vw;
    letter-spacing: -.01em;
    line-height: 100%;
    margin: 0;

    cursor: pointer;

    width: 200%;
    color: ${props => props.theme.colors.background};
    background: linear-gradient(to right, #b6b6b6, #b6b6b6) no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 0%;
    transition: background-size cubic-bezier(.1,.5,.5,1) 0.5s;

    border-bottom: 1px solid #2F2B28;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    position: relative;

    & span {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.text};

        clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
        transform-origin: center;
        transition: all cubic-bezier(.1,.5,.5,1) 0.4s;

        display: flex;
        align-items: flex-end;
        flex-direction: column;
        justify-content: center;
    }

    &:hover span {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
`;


const variantsItem = {
    initial:{
        x: -500,
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
const variantsBox = {
    initial:{
        x: -500,
        y: 0,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: "spring", 
            stiffness: 100
        },
    },
}


  

export default function RowView() {
    const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredProjectIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredProjectIndex(null);
    };
  
    return (
        <RowViewContainer id='row'>
            <WorkRow
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 1 } }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
                    {ProjectData.map((data, index) => (
                        <Title
                            variants={variantsItem}
                            initial="initial"
                            whileInView="animate"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            key={index}>
                                {data.title.toUpperCase()}
                                <span>{data.content.toUpperCase()}</span>
                        </Title>
                    ))}
            </WorkRow>
            {hoveredProjectIndex !== null && (
        <ProjectBox
            variants={variantsBox}
            initial="initial"
            whileInView="animate"
            key={hoveredProjectIndex}>
            <ProjectImage src={ProjectData[hoveredProjectIndex].img} />
            <FlexContainer flex wrap align="start" justify="center">
            {ProjectData[hoveredProjectIndex].labels.map((label, key) => (
                <ProjectTechItem key={key}>{label}</ProjectTechItem>
            ))}
            </FlexContainer>
        </ProjectBox>
        )}
        </RowViewContainer>
    )}
