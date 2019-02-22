import styled from 'styled-components'
const LimitedContainer = styled.div`
    max-width: 500px;
    padding: 60px;
    animation: fade 1s ease-in-out;
    @keyframes fade {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`
export default LimitedContainer
