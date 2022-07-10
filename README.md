The goal of this project is to provide a list of transaction history, where a user can filter transaction by type, status and also by the date a transaction was made, also a user can search by the name, status and also by the type of transaction.

# `Backend`

A fake GraphQL API was used to mock the data used

##### `Running the backend locally`

To startup the server, run the following command:

    npm install -g graphql-faker

Use the following command to open the interactive editor:

    graphql-faker --open

Use this schema in the editor to generate the api that will be used on the frontend

```
type Transaction {
  id: ID!
  status: String! @examples(values: ["completed", "failed"])
  type: String! @examples(values: ["credit", "debit"])
  date: String! @fake(type:date, options:{dateFrom:"2017-01-01T00:00:00.000Z", dateTo:"2022-01-01T00:00:00.000Z"})
  name: String! @fake(type: fullName)
}

type Query {
  transactions: [Transaction] @listLength(min: 30, max: 40)
}
```

The server operates on:

```
http://localhost:9002/graphql
```

# `Frontend`

React & ReactDOM 18.2.0
urql 2.2.2
Graphql 16.5.0
TypeScript 4.7.4
Material UI 5.8.7
React-icons 4.4.0

#### `Usage`

## `Functionalities`

1. A user can filter by transaction type(deposit or withdrawal), transaction status(successful or failed)
   Urql was used for consuming the backend api

Two helper functions were used

1. Date formatter: This is used to format raw date strings to year. It takes a raw date string and converts it to a year.

2. Year Grouping: This function takes in an array of data and groups it by year.
