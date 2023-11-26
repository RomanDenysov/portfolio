import { motion, useAnimation } from "framer-motion"
import React, { useEffect, useState } from "react"
import styled from "styled-components"



const SmoothScrollTarget = styled(motion.div)`
    height: 100%;
    scroll-snap-align: start;
`

export default function SmoothScroll( { children } ) {
    const controls = useAnimation()
    const [scrollY, setSCrollY] = useState(0)

    const handleScroll = () => {
        setSCrollY(window.scrollY)
    }

    useEffect(()=> {
        controls.start({ y: -scrollY })
    }, [controls, scrollY])

    useEffect(()=> {
        const handleResize = () => {
            controls.start({ y: -window.scrollY })
        }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleResize)
    }

    }, [controls])

  return (
    <>
    {React.Children.map(children, (child, index) => (
        <SmoothScrollTarget key={index}>
            {child}
        </SmoothScrollTarget>
    ))}
    </>
  )
}
