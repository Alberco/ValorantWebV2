import styled from 'styled-components'

export const BoxHome = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    place-content: center;
    place-items: center;
    border: solid 3px white; 
    border-radius: 10px;
    background: #0C0C17;
    color: white;
    @media (min-width: 640px) {  }
    @media (min-width: 768px) { grid-template-columns: repeat(2,1fr); }
    @media (min-width: 1024px) {  }
    @media (min-width: 1280px) {  }
    @media (min-width: 1536px) {  }
`
export const HomeTitle = styled.p`
    padding : 0rem;
    font-size: 1.7rem;
    text-align : center;
    font-family :'Staatliches', cursive;
    font-weight : 400 ;
    color: #fff;
    padding : 0rem 1.5rem;
    padding-top: 3.5rem;
    @media (min-width: 640px) {  }
    @media (min-width: 768px) { 
        font-size: 1.8rem;
        padding : 0rem 1.4rem;
     }
    @media (min-width: 1024px) { 
        font-size: 2.5rem;
        padding : 0rem 1.8rem;
      }
    @media (min-width: 1280px) {  }
    @media (min-width: 1536px) {  }
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem;
    @media (min-width: 640px) {  }
    @media (min-width: 768px) { padding: 1rem 0rem;  }
    @media (min-width: 1024px) { padding: 0rem 0rem;  }
    @media (min-width: 1280px) {  }
    @media (min-width: 1536px) {  }
`
export const ImgAgen = styled.img`
    width: 200px;
    aspect-ratio: auto;
    @media (min-width: 640px) {  }
    @media (min-width: 768px) { width: 300px; }
    @media (min-width: 1024px) {     width: 400px; }
    @media (min-width: 1280px) {  }
    @media (min-width: 1536px) {  }
`
export const BottomD = styled.button`
    width: 10rem;
    background:#A41D0E;
    padding: 1rem ;
    font-family :'Staatliches', cursive;
    color: white;
    font-size: 1.4rem;
    &:hover {
        transition: 1s;
        background-color:#a41d0eca;
        border: solid 2px white;
        cursor: pointer;
    }

`