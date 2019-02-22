import styled from 'styled-components'
const SpaceAround = styled.div`
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: 0.5s fade ease-in-out;
`
export default SpaceAround
