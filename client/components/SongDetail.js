import React, {PureComponent} from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import query from '../queries/fetchSong'

class SongDetail extends PureComponent {
  render() {
    if (!this.props.data.song) return <div>Loading</div>
    return (
      <div>
        <Link to='/'>Back</Link>
        <h3>{this.props.data.song.title}</h3>
      </div>
    )
  }
}

export default graphql(query, {
  options: (props) => ({
    variables: {
      id: props.match.params.id
    }
  })
})(SongDetail)
