import React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'


interface FilterType  {
  Selectvalue?: any | HTMLInputElement | undefined;
  handleChange: (e: SelectChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
  title: string;
  name: string;
  label: string;
}


const Filter: React.FC<FilterType> = ({ Selectvalue, handleChange, children, title, name, label}) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{title}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={Selectvalue}
          label={label}
          name={name}
          onChange={handleChange}
        >
          {children}
        </Select>
      </FormControl>
    </Box>
  )
}

export default Filter
