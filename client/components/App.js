import React from 'react'
import { Route } from 'react-router-dom'
import SongList from "./SongList"

const App = ({}) => {
  return (
    <div className="container">
      <Route path="/" component={SongList} />
    </div>
  )
}

App.propTypes = {}

export default App