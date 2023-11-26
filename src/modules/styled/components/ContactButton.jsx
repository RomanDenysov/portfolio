import styled from "styled-components"

import { BiSolidSend } from "react-icons/bi";



// Стилі компонента 
const Text = styled.span`
    font-size: .75rem;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    &:focus {
        opacity: 0;
    }
`
const StyledContactButton = styled.button`
    width: 3.4rem;
    height: 2rem;
    border: none;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 300;
    gap: 0.2rem;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: 2px solid ${props => props.theme.colors.text};
    border-radius: 100px;
    &:focus{
        outline: none;
    }
    &:focus ${Text}{
        opacity: 0;
    }
    .icon{
        position: absolute;
        left: 0.2rem;
        top: 0.04rem;
        transition: all 0.5s ease-in-out;
    }
    &:focus .icon{
        left: 2rem;
        scale: 1.1;
        opacity: 0;
    }
`


export default function ContactButton({children}) {
  return (
    <StyledContactButton>
            <BiSolidSend className="icon"/>
            <Text>
                {children}
            </Text>
        </StyledContactButton>
  )
}
