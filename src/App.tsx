import { useState } from 'react'
import { gql, useQuery, ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { createClient } from 'graphqurl';
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

const GET_CURRENT_USER = gql`
fragment UserData on IntercomData {
  data {
    email
  }
}
{
  searchUser{
    ...UserData
  }
}
`;
const GET_CURRENT_USER1 ='query{searchUser{...on IntercomData{data{email}}}}'

// const { loading, data } = useQuery(GET_CURRENT_USER);



// const { loading, data } = useQuery(GET_CURRENT_USER);
const runQuery = () => {
  const client = createClient({
    endpoint: 'http://localhost:4000/',
    //   headers: {
      //     'Authorization': 'Bearer <token>'
      //   }
    });
    
    // query ($id: Int) { table_by_id (id: $id) { column } }
    client.query({
    query: '{ searchUser { ...on IntercomData { data { email } } } }'
  })
  .then(rsp => console.log(rsp))
  .catch(err => console.error('stoopid error; ', err))
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={runQuery}>
            Run Query
          </button>
          {/* <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button> */}
        </p>
        {/* {!loading ? <pre>{JSON.stringify(data.searchUser.data[0].email)}</pre> : null} */}
        {/* <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p> */}
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
