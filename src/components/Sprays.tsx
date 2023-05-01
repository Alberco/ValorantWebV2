import { useEffect, useState } from "react";
import FondoWeb from "../styles/FondoWeb";
import ImagenAgents from "../styles/ImagenAgent";
import { Spray } from "../type";
import styled from 'styled-components'


const BoxSpray = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    align-items: center;
    align-content: center;
    border: 1px solid #CACAD6;
    border-radius: 10px;
    margin: 4rem;
    text-align: center;
    color : white;
    font-family :'Staatliches', cursive;
    font-size: 1.2rem;
    background:#0C0C17;
    padding: 20px 0px;
`


interface Props {
    data : Array<Spray>
}

const URL = "https://valorant-api.com/v1/sprays"

function Sprays() {

    const [newSprays,setNewSprays] =  useState<Props["data"]>([])

    useEffect(() => {
        getDataSprayValorant(URL)
    },[])

    const getDataSprayValorant = async (url:string) => {
        const data = await fetch(url);
        const response = await data.json();
        setNewSprays([...response.data])
    }


    return ( 
        <FondoWeb>
            <BoxSpray>
                 {
                     newSprays.map((item) => (
                         <div key={item.uuid}>
                             <p>{item.displayName}</p>
                             <ImagenAgents src={item.displayIcon} />
                         </div>
                     ))
                 }
            </BoxSpray>
        </FondoWeb>
     );
}

export default Sprays;