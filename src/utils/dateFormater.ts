export const formatDate = (date: string): number | string => {
  return new Date(date).getFullYear()
}
