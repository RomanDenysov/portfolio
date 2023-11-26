import styled from "styled-components"
import FlexContainer from '@styled/components/FlexContainer'

const WorkCardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
    z-index: 1;
`
const WorkTextBox = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to top, black 10%, transparent 100%);
    border-radius: 30px;
    display: flex;
    align-items: start;
    justify-content: flex-end;
    flex-direction: column;
    padding: 1.6rem 1.2rem;
    opacity: 0;
    z-index: 2;
    transition: all 0.3s ease;
    gap: 0.6rem;
    box-shadow: 4px 5px 32px 14px rgba(0,0,0,0.4) inset;
`
const StyledWorkCard = styled.div`
    width: 16rem;
    height: 16rem;
    border-radius: 30px;
    position: relative;
    transition: all 0.3s ease-in-out;
    &:hover ${WorkTextBox}{
        opacity: 1;
    }
`
const WorkTitle = styled.h3`
    flex: 1 0;
    margin-top: 70%;
    font-size: 1rem;
    color: ${props => props.theme.colors.textColor};
`
const WorkDescr = styled.p`
    flex: 1 0;
    font-size: 0.6rem;
    font-weight: 300;
    color: ${props => props.theme.colors.textColor};
`
const WorkTech = styled.span`
    flex: 1 0;
    padding: 0.24rem;
    font-size: 0.5rem;
    font-weight: 300;
    color: ${props => props.theme.colors.textColor};
    border-radius: 30px;
    background-color: grey;
`

export default function WorkCard() {
  return (
        <StyledWorkCard>
            <WorkCardImage src="https://themewagon.com/wp-content/uploads/2022/03/screencapture-technext-github-io-startup2-index-html-2022-03-07-10_56_37-1.png"/>
            <WorkTextBox>
                <WorkTitle>Consulting</WorkTitle>
                <WorkDescr>Site for consulting agency</WorkDescr>
                <FlexContainer flex wrap align='center' justify="flex-start" gap='0.2rem'>
                    <WorkTech>ReactJS</WorkTech>
                    <WorkTech>JavaScript</WorkTech>
                    <WorkTech>CSS</WorkTech>
                    <WorkTech>Node.js</WorkTech>
                </FlexContainer>
            </WorkTextBox>
        </StyledWorkCard>
  )
}
