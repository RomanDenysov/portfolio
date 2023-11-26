import styled, {css} from "styled-components"

const StyledFlex = styled.div`
    max-width: 100%;
    height: 100%;
    display: flex;
    align-items: ${props=>props.align || 'stretch'};
    justify-content: ${props=>props.justify || 'stretch'};
    flex-direction: ${props=>props.direction || 'row'};
    gap: ${props=>props.gap || null};
    margin: ${props=>props.margin || '0'};
    ${props=>props.flex && css`
      flex: 1 0;
    `}
    ${props=>props.wrap && css`
      flex-wrap: wrap;
    `}
`

export default function FlexContainer(props) {
  return <StyledFlex {...props} />
}
