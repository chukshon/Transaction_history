import React from 'react'
import { StyledP } from './style'

interface CardType {
  completedImg: string | undefined
  failedImg: string | undefined
  data: any
  nameIcon: JSX.Element
  statusIcon: JSX.Element
  typeIcon: JSX.Element
}
const Card: React.FC<CardType> = ({ completedImg, failedImg, data, nameIcon, typeIcon, statusIcon }) => {
  return (
    <div
      key={data.id}
      style={{
        display: 'flex',
        gap: '1rem',
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          width: '200px',
          height: '0px',
          marginBottom: '10px',
        }}
      >
        {data.status === 'successful' ? (
          <img src={completedImg} alt='successful' />
        ) : (
          <img src={failedImg} alt='failed' />
        )}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#B9D9D7',
          borderRadius: '10px',
          width: '300px',
          height: '250px',
          marginBottom: '10px',
          padding: '0px 10px',
        }}
      >
        <StyledP>
          <span >{nameIcon}</span>
           <p>{data.name}</p> 
        </StyledP>
        <StyledP>
          <span style={{color: data.type === 'deposit' ?'green' : 'red'}}>{typeIcon}</span>
           <p>{data.type}</p> 
        </StyledP>
        <StyledP>
          <span style={{color: data.status === 'successful' ?'green' : 'red'}}>{statusIcon}</span>
           <p>{data.status}</p> 
        </StyledP>
      </div>
    </div>
  )
}

export default Card
