import React from 'react'
import { Route } from 'react-router-dom'
import SongList from "./SongList"
import SongCreate from "./SongCreate"
import SongDetail from "./SongDetail"

const App = ({match}) => {
  console.log(match)
  return (
    <div className="container">
      <Route path="/" component={SongList} exact />
      <Route path="/songs/new" component={SongCreate} />
      <Route path="/songs/detail/:id" component={SongDetail} />
    </div>
  )
}

App.propTypes = {}

export default App