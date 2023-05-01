import styled from 'styled-components'


const ListCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
  padding: 1rem;
  row-gap: 1rem;
  column-gap: 1rem;
  justify-items: center;
  align-items: center;
  place-content: center;
  margin-top: 4rem;  
`

export default ListCard