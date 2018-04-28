import React, {PureComponent} from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import query from '../queries/fetchSong'
import LyricCreateForm from "./LyricCreateForm"

class SongDetail extends PureComponent {
  renderLyrics() {
    return this.props.data.song.lyrics
      .map((lyric, index) => (
        <li key={index}>{lyric.content}</li>
      ))
  }
  render() {
    const { song } = this.props.data;
    if (!song) return <div>Loading</div>
    return (
      <div>
        <Link to='/'>Back</Link>
        <h3>{song.title}</h3>
        <ul>
          {this.renderLyrics()}
        </ul>
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
