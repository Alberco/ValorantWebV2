import styled from "styled-components";

export const BoxGuns = styled.div`
border: solid 2px white;
border-radius : 10px;
margin: auto 25px;
background: #0C0C17;
padding-bottom: 100px;


`
export const BoxStadist = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
    @media (min-width: 1024px) { 
        grid-template-columns: repeat(2,1fr);
    }
`
export const ImgGuns = styled.img`
    width: 18rem;
    height: auto;
    object-fit: contain;
`

export const TitleWeapon = styled.p`
font-size: 4rem;
color : white;
font-family :'Staatliches', cursive;
font-weight : bold;
text-align: center;
`

export const TableStats = styled.table`
color: white;
text-align: center;
    > tr,td ,th{
        color: white;
        padding: 10px 10px;
        text-align: center;
        font-size: 1.3rem;
    }
`

export const BoxSkins = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    justify-content: center;
    text-align: center;
    align-items: center;
    align-content: center;
    color: white;
    font-family :'Staatliches', cursive;
    font-size:2rem;
`