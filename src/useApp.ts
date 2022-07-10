import { useState } from 'react'
import { formatDate } from './utils/dateFormater'
import { useQuery } from 'urql'
import { getAllTransfers } from './schemas/getAllTransfers'
import { SelectChangeEvent } from '@mui/material'

import { TransferType } from './types'

export const useApp = () => {
  const [{ data }] = useQuery({
    query: getAllTransfers,
  })

  interface FilterFiled {
    text: string
    status: string
    type: string
    date: string
  }
  const [allTransfers, setAllTransfers] = useState<TransferType[]>([])
  const [filtered, setFiltered] = useState<TransferType[]>([])
  const [filterField, setFilterField] = useState<FilterFiled>({
    text: '',
    status: 'all',
    type: 'all',
    date: 'all',
  })

  const handleChange = (e: SelectChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setFilterField((filterField) => ({
      ...filterField,
      [name]: value,
    }))
  }

  const handleFilter = () => {
    let newData = [...allTransfers]
    if (filterField.text) {
      newData = newData.filter((datum: TransferType) => {
        return (
          datum.name.toLowerCase().startsWith(filterField.text.toLowerCase()) ||
          datum.type.toLowerCase().startsWith(filterField.text.toLowerCase()) ||
          datum.status.toLowerCase().startsWith(filterField.text.toLowerCase())
        )
      })
    }
    if (filterField.status !== 'all') {
      newData = newData.filter((datum: TransferType) => {
        return datum.status === filterField.status
      })
    }
    if (filterField.type !== 'all') {
      newData = newData.filter((datum: TransferType) => {
        return datum.type === filterField.type
      })
    }
    if (filterField.date !== 'all') {
      newData = newData.filter((datum: TransferType) => {
        return formatDate(datum.date) === Number(filterField.date)
      })
    }
    setFiltered(newData)
  }
  return {
    data,
    allTransfers,
    filtered,
    filterField,
    setAllTransfers,
    setFiltered,
    setFilterField,
    handleChange,
    handleFilter,
  }
}
