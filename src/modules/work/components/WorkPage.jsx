import styled from "styled-components"

import { motion, useAnimation } from "framer-motion";
import { HiViewGrid, HiViewList } from "react-icons/hi";
import RowView from "./RowView";
import GridView from "./GridView";
import { useEffect, useState } from "react";


const WorkContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.colors.primary};
    padding: 1rem 1rem 0 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    scroll-snap-align: center;
`;
const WorkHeader = styled(motion.div)`
    color: ${props => props.theme.colors.primary};
    width: 100%;
    height: 10%;
    display: flex;
    margin-top: 5vh;
    position: relative;
    padding-left: 6rem;
`
const WorkTitleBox = styled(motion.div)`
    width: 100%;
    align-self: center;
    text-align: center;
    margin: 0;
`
const WorkTitle = styled(motion.h1)`
    width: 100%;
    align-self: center;
    text-align: center;
    font-size: 4.6vw;
    letter-spacing: -0.2rem;
    font-weight: 900;
    line-height: 100%;
    margin: 0 0 2rem 0;
    color: ${props => props.theme.colors.text};
    user-select: none;
`
const WorkSelector = styled(motion.div)`
    width: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
`
const Selector = styled(motion.button)`
    width: 2.4rem;
    height: 2.4rem;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 1px 5px 10px 2px rgba(0, 0, 0, 0.2);
    color: ${props => props.theme.colors.text};
    
    font-size: 1.6rem;

    display: flex;
    align-items: center;
    justify-content: center;
    
    transition: all 0.2s ease-in-out;
    
    cursor: pointer;
    &:hover {
        border-radius: 30px;
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.text};
    }
`



const variantsBox = {
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
            type: "spring", 
            stiffness: 200,
            damping: 20
        },
    },
}



const WorkPage = () => {
    const [viewType, setViewType] = useState('grid')
    const controls = useAnimation()

    const handleViewChange = (type) => {
        setViewType(type)
    }
    const getViewComponent = () => {
        if(viewType === 'grid'){
            return <GridView />
        } else if(viewType === 'row') {
        return <RowView />}
    }

    useEffect(()=> {
        controls.start({opacity: 1})
    }, [controls])

  return (
    <WorkContainer>
            <WorkHeader
                variants={variantsBox}
                initial="initial"
                whileInView="animate">
                <WorkTitle
                    >Projects</WorkTitle>
                <WorkSelector>
                    <Selector
                        whileHover={{scale: 1.05}}
                        whileTap={{ scale: 0.95 }}
                        transition={{type: "spring", stiffness: 400, damping: 20 }}>
                        <HiViewGrid onClick={()=>handleViewChange('grid')} />
                    </Selector>
                    <Selector
                        whileHover={{scale: 1.05}}
                        whileTap={{ scale: 0.95 }}
                        transition={{type: "spring", stiffness: 400, damping: 20 }}>
                        <HiViewList onClick={()=>handleViewChange('row')} />
                    </Selector>
                </WorkSelector>
            </WorkHeader>
            {getViewComponent()}
    </WorkContainer>
  )
}

export default WorkPage