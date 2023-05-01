import styled from "styled-components";
import Description from "../Description";


export const TitleAgent = styled.p`
    text-align: center;
    font-size: 3.5rem;
    color : white;
    font-family :'Pathway Gothic One', sans-serif;
    margin: auto auto;
`
export const BoxIz = styled.div`
    margin: auto auto;  
    order: 2;
    @media (min-width: 640px) { 
    }
    @media (min-width: 768px) {

    }
    @media (min-width: 1024px) { 
        order: 1;
    }
`
export const BoxDe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  order: 1;
    @media (min-width: 768px) {
        
    }
    @media (min-width: 1024px) { 
        order: 2;
    }
`
export const ContentDes = styled(Description)`
    font-size: 1.2rem;
    padding: 0px 4rem;
    
`

export const Icon = styled.img`
    width:4rem;
    height:3.7rem;
`

export const ButtonSkin = styled.button`
    background:none;
    border:none;
`

export const SkinImg = styled.img`
    width:8rem;
    height:8rem;
    background:#882a20;
    border: solid 1px white;
    cursor: pointer;
    
`