import { useEffect } from 'react'
import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import { StyledSearch, Wrapper, FilterGroup } from './style'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { ImArrowUp2, ImArrowDown2 } from 'react-icons/im'
import {GrClose, GrCheckmark} from 'react-icons/gr'
import completedImg from './assets/completedImg.png'
import failedImg from './assets/failedImg.png'
import { groupData } from './utils/yearGrouping'
import { useApp } from './useApp'
import Filter from './components/filter/Filter'
import Card from './components/card/Card'
import {TransferType} from './types'


function App() {
  const {
    data,
    filtered,
    filterField,
    setAllTransfers,
    handleFilter,
    setFiltered,
    handleChange,
  } = useApp()

  useEffect(() => {
    if (data) {
      setAllTransfers(data.transactions)
      setFiltered(data.transactions)
    }
  }, [data, setAllTransfers, setAllTransfers])

  useEffect(() => {
    handleFilter()
  }, [filterField])

  return (
    <Wrapper>
      <StyledSearch
        placeholder='Search'
        value={filterField.text}
        name='text'
        onChange={handleChange}
      />
      <FilterGroup>
        <Filter
          Selectvalue={filterField.status}
          handleChange={handleChange}
          title='Status'
          name='status'
          label='status'
        >
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'successful'}>successful</MenuItem>
          <MenuItem value={'failed'}>failed</MenuItem>
        </Filter>
        <Filter
          Selectvalue={filterField.type}
          handleChange={handleChange}
          title='Type'
          name='type'
          label='type'
        >
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'deposit'}>Deposit</MenuItem>
          <MenuItem value={'withdrawal'}>Withdrawal</MenuItem>
        </Filter>
        <Filter
          Selectvalue={filterField.date}
          handleChange={handleChange}
          title='Date'
          name='date'
          label='date'
        >
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'2017'}>2017</MenuItem>
          <MenuItem value={'2018'}>2018</MenuItem>
          <MenuItem value={'2019'}>2019</MenuItem>
          <MenuItem value={'2020'}>2020</MenuItem>
          <MenuItem value={'2021'}>2021</MenuItem>
        </Filter>
      </FilterGroup>

      {groupData(filtered).map((group, i) => {
        return (
          <div key={i}>
            <h4
              style={{
                background: '#E3DBDB',
                maxWidth: '100px',
                width: '100%',
                border: '2px solid black',
                textAlign: 'center',
                padding: '20px 20px',
              }}
            >
              {group[0].year}
            </h4>
            {group.map((data: TransferType) => {
              return (
                <Card
                  completedImg={completedImg}
                  failedImg={failedImg}
                  data={data}
                  nameIcon={<AiOutlineUserAdd />}
                  typeIcon={
                    data.type === 'deposit' ? <ImArrowUp2 /> : <ImArrowDown2 />
                  }
                  statusIcon={
                    data.status === 'successful' ? <GrCheckmark /> : <GrClose />
                  }
                  key={data.id}
                />
              )
            })}
          </div>
        )
      })}
    </Wrapper>
  )
}

export default App
