import React, {PureComponent} from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import query from '../queries/fetchSong'
import LyricCreateForm from "./LyricCreateForm"
import LyricList from "./LyricList"

class SongDetail extends PureComponent {
  render() {
    const { song } = this.props.data;
    if (!song) return <div>Loading</div>
    return (
      <div>
        <Link to='/'>Back</Link>
        <h3>{song.title}</h3>
        <LyricList
          lyrics={this.props.data.song.lyrics}/>
        <LyricCreateForm
          songId={song.id}/>
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
