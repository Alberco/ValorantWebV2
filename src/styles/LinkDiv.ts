import styled from 'styled-components'
import { Link } from 'react-router-dom'


const LinkDiv = styled(Link)`
    color: white;
    border: solid 1px transparent;
    text-decoration : none;
    transition: 0.5s;
    &:hover {
        transform: scale(1.05);
    }
    @media (min-width: 640px) { 
    }
    @media (min-width: 768px) {
        font-size: 1rem;
    }
    @media (min-width: 1024px) { 
        font-size: 1.2rem;
    }
    @media (min-width: 1280px) {  }
    @media (min-width: 1536px) {  }
`

export default LinkDiv;