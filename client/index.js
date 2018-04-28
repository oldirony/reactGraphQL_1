import './style/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { HashRouter as Router, Route } from 'react-router-dom'
import App from "./components/App"

const client = new ApolloClient({
  dataIdFromObject: o => o.id
})

const Root = () => (
  <ApolloProvider
    client={client}>
    <Router>
      <Route component={App} path="/" />
    </Router>
  </ApolloProvider>
)

ReactDOM.render(
  <Root/>,
  document.querySelector('#root')
)
