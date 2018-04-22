import React from 'react'
import { Route } from 'react-router-dom'
import SongList from "./SongList"
import SongCreate from "./SongCreate"

const App = ({match}) => {
  console.log(match)
  return (
    <div className="container">
      <Route path="/" component={SongList} exact />
      <Route path="/songs/new" component={SongCreate} />
    </div>
  )
}

App.propTypes = {}

export default App