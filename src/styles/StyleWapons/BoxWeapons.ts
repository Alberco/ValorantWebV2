import styled from 'styled-components'


export const BoxWeapons = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    margin-top: 4rem;
    padding: 1rem;
    gap: 2rem;
    @media (min-width: 640px) { 
    }
    @media (min-width: 768px) {
      padding: 3rem;
    }
    @media (min-width: 1024px) { 
        
    }
    @media (min-width: 1280px) {  }
    @media (min-width: 1536px) {  }
`