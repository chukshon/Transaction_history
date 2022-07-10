import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { client } from './client'
import { Provider } from 'urql'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
)
