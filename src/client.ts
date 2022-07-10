import { createClient } from 'urql'

export const client = createClient({
  url: 'http://localhost:9002/graphql' as string,
})
