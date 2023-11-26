import styled from "styled-components"

const StyledWrapper = styled.div`
    max-width: 1366px;
    height: 100%;
    margin: auto;
    padding: 0 1rem;
`

export default function WrapperContainer({children}) {
  return <StyledWrapper>{children}</StyledWrapper>
}
