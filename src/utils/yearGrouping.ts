import { TransferType } from '../types'
export const groupData = (mock: TransferType[]) => {
  const map: any = {}
  mock.forEach((datum: TransferType) => {
    const year = new Date(datum.date).getFullYear()
    if (!map[year]) {
      map[year] = []
    }
    map[year].push({ ...datum, year })
  })
  const groupedData = Object.keys(map).map((year) => map[year])
  return groupedData
}
