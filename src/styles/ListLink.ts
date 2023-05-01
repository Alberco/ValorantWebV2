import styled from 'styled-components'

const ListLink = styled.ul`
    display: flex;
    justify-content : center;
    align-items: center;
    color: white;
    gap : 1rem;
    padding: 0rem;
    @media (max-width: 400px){
      gap:5px;
      justify-content: center;
      justify-items: center;
  }

`

export default ListLink;