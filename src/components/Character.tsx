import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BoxCharacter from "../styles/boxCharacter";
import FondoWeb from "../styles/FondoWeb";
import ImgCharacter from "../styles/ImgCharacter";
import { Agents } from "../type";
import iconFail from "../animation/undefied.webp";
import {
  BoxDe,
  BoxIz,
  ContentDes,
  Icon,
  TitleAgent,
} from "../styles/styleCharacter/characterStyle";
import styled from "styled-components";

interface Props {
  result: Agents;
}

const URL = `https://valorant-api.com/v1/agents/`;

const ListaDescrip = styled.p`
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 250px;
  gap: 20px;
  padding: 1rem;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    flex-direction: row;
    width: auto;
  }
  @media (min-width: 1024px) {
  }
`;

function Character() {
  const [dataAgent, setDataAgent] = useState<Props["result"]>();
  const [newImgUrl, setNewImgUrl] = useState<string>("");

  let params = useParams();

  const id = String(params.agentsId);

  useEffect(() => {
    getDataAgentsValorant(URL, id);
  }, [id]);

  const getDataAgentsValorant = async (url: string, id: string) => {
    const data = await fetch(url + id);
    const response = await data.json();
    setDataAgent(response.data);
  };

  const ul = {
    margin: "auto",
  };

  return (
    <FondoWeb>
      {
        <BoxCharacter>
          <BoxIz>
            <TitleAgent>{dataAgent?.displayName}</TitleAgent>
            <ContentDes>{dataAgent?.description}</ContentDes>
            <ul style={ul}>
              {dataAgent?.abilities.map((item, index) => (
                <ListaDescrip key={index + "dsdsd223"}>
                  <span>{item.displayName}</span>
                  <span>{item.description}</span>
                  <span>
                    <Icon
                      src={!item.displayIcon ? iconFail : item.displayIcon}
                    />
                  </span>
                </ListaDescrip>
              ))}
            </ul>
          </BoxIz>
          <BoxDe>
            <ImgCharacter
              src={!newImgUrl ? dataAgent?.fullPortrait : newImgUrl}
              alt="Img no encontrada"
            />
          </BoxDe>
        </BoxCharacter>
      }
    </FondoWeb>
  );
}

export default Character;
