
import { useEffect, useState } from "react";
import FondoWeb from "../styles/FondoWeb";
import { Clasification } from "../type";
import styled from 'styled-components'

const URL = "https://valorant-api.com/v1/competitivetiers"

interface Props {
    data : Array<Clasification>
}

const BoxTier = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    border: solid 2px white;
    border-radius: 40px;
    align-content: center;
    text-align: center;
    padding: 2rem;
    margin: 0rem 4rem;
    margin-top: 6rem;
    background:#0C0C17;
    font-family :'Staatliches', cursive;
    font-size: 1.4rem;
`
const Fondo = styled(FondoWeb)`
    min-height : 100vh;
    
`

function GameMode() {

    const [newTiers,setNewTiers] = useState<Props["data"]>([])

    useEffect(()=>{
        getDataTierValorant(URL)    
    },[])

    const getDataTierValorant = async (url:string) => {
        const data = await fetch(url);
        const response = await data.json();
        console.log(response.data)
        setNewTiers([...response.data])
    }

    return ( 
        <Fondo>
            {
                newTiers
                    .filter( u => u.uuid === "e4e9a692-288f-63ca-7835-16fbf6234fda" )
                    .map(( item => (
                    <BoxTier key={item.uuid} style={{color:"white"}}>
                        {item.tiers
                            .filter(x => x.divisionName !== "Unused1" && x.divisionName !== "Unused2")
                            .map(i => (
                            <div key={i.tier}>
                                <p>{i.divisionName}</p>
                                <img src={i.smallIcon} alt="" />

                            </div>
                        ))}
                    </BoxTier>
                )))
            }
        </Fondo>
     );
}

export default GameMode;