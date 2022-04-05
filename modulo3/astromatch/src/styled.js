import styled from 'styled-components'
import ListIcon from '@mui/icons-material/List';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const DivApp = styled.div`
  margin: 0;
  padding: 0%;
  background-color: #d0d0d0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #04eb91 0, #a867ff 100%);
`

export const DivInterna = styled.div`
  width: 400px;
  min-height: 400px;
  max-height: fit-content;
  margin-top: 5px;
  border: 1px solid #6c00ff;
  background-color: rgba(0,0,0,0.5);
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 400px;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dedede;
  padding: 0 12px;
  background-color: white;
`

export const DivEspaco = styled.div`
  width: 1.4em;
  display: flex;
`

export const Logo = styled.img`
  height: 100%;
`

export const IconeCurtidas = styled(ListIcon)`
  cursor: pointer;
  color: #820095;
`

export const IconeVoltar = styled(ArrowBackIcon)`
  cursor: pointer;
  color: #34AAA9;
`