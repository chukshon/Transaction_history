import { styled } from '@mui/material'

export const Wrapper = styled('main')`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  border: 4px solid #101f55;
  padding: 0px 20px;
  font-family: 'Poppins', sans-serif;
`

export const StyledSearch = styled('input')`
  margin-top: 50px;
  background-color: #dcebfa;
  color: black;
  border: 2px solid black;
  border-radius: 40px;
  padding: 20px 30px;
  font-size: 1rem;
`
export const FilterGroup = styled('div')`
  display: flex;
  gap: 1rem;
  margin-top: 20px;
  margin-bottom: 40px;
`
