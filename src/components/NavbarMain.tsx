import ListLink from "../styles/ListLink";
import Navbar from "../styles/Navbar";
import icon from "../animation/icon1.png";
import { IconImg } from "../styles/IconImg";
import LinkDiv from "../styles/LinkDiv";
import pathLink from "../tools/archiveUrl";
import styled from "styled-components";

const Titulos = styled.li`
  list-style: none;
  color: white;
  display: none;
  font-weight: 700;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1280px) {
  }
  @media (min-width: 1536px) {
  }
`;
function NavbarMain() {
  return (
    <Navbar>
      <ListLink>
        <IconImg src={icon} alt="" />
        <Titulos>Valorant</Titulos>
      </ListLink>
      <ListLink>
        {pathLink.map((item, index) => (
          <Titulos key={index + "dsdsd23"}>
            <LinkDiv to={item.url}>{item.title}</LinkDiv>
          </Titulos>
        ))}
      </ListLink>
      <ListLink>
        <Titulos>Donation</Titulos>
        <Titulos>Github</Titulos>
      </ListLink>
    </Navbar>
  );
}

export default NavbarMain;
