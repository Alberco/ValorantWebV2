import styled from 'styled-components'
import fondo1 from '../animation/fondo3.jpg'

const FondoHome = styled.div`
  background-image: url(${fondo1});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 0rem 1rem;
  margin-top: 2rem;
  @media (min-width: 340px) { 
    padding: 0rem 1rem;
  }
  @media (min-width: 640px) { 
  }
  @media (min-width: 768px) {
    padding: 0px 2rem;
    margin-top: 2rem;
  }
  @media (min-width: 1024px) { 
    padding: 0rem 8rem;
    }
  @media (min-width: 1280px) { 
    padding: 3rem 8rem;
   }
  @media (min-width: 1536px) {  }
`

export default FondoHome;