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

#### `Packages`

[React & ReactDOM 18.2.0](https://reactjs.org/)<br>

[urql 2.2.2](https://formidable.com/open-source/urql/)<br>

[Graphql 16.5.0](https://graphql.org/)<br>

[TypeScript 4.7.4](https://www.typescriptlang.org/)<br>

[Material UI 5.8.7](https://mui.com/)
<br>

[React-icons 4.4.0](https://react-icons.github.io/react-icons/)<br>

#### `Usage`

To install dependencies:

```
npm install or yarn
```

To start the server:

```
npm start or yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## `Functionalities`

1. A user can filter by transaction type(deposit or withdrawal), transaction status(successful or failed) and date(2017- 2021)

2. A user can search by transaction name, type or status and date

3. Urql was used for consuming the backend api

## `Helper Functions`

Two helper functions were used

1. Date formatter: This is used to format raw date strings to year. It takes a raw date string and converts it to a year.

2. Year Grouping: This function takes in an array of data and groups it by year.

## `Improvement Suggestion`

I'll suggest a pagination or load more button is added to each date group there by limiting the amount of data shown to just 5-7 transaction history per date group. This way, a user gets to see more transaction history by clicking the load more button or paginating
