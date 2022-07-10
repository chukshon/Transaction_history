export const getAllTransfers = `
query {
  transactions {
    id
    status
    date
    type
    name
  }
  }
`
