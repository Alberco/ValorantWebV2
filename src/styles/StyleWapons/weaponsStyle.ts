import styled from 'styled-components'


export const CardWeapons = styled.div`
    display: flex;
    flex-direction: column;
    align-items : center;
    background: #A41D0E;
    border: solid 4px #504645;
    border-radius: 10px;
    transition: 0.2s;
    @media (min-width: 640px) { 
    }
    @media (min-width: 768px) {
        &:hover{
        border: solid 4px white;
        transform: scale(1.05);
    }
    }
    @media (min-width: 1024px) { 
        
    }
    @media (min-width: 1280px) {  }
    @media (min-width: 1536px) {  }
`
export const ImgWeapons = styled.img`
    width: 15rem;
    height: 15rem;
    object-fit: contain;
`
export const Price = styled.p`
    font-size:1.5rem;
    font-family :'Staatliches', cursive;
    color: white;
`