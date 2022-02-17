import React from 'react'
import ReactDOM from 'react-dom'
import { gql, useQuery, ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './index.css'
import App from './App'

const initClient = () =>
  new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/'
  });

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={initClient()}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
