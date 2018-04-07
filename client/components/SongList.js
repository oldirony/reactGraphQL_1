import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map((song) => (
      <li key={song.id}
      className="collection-item">
        {song.title}
      </li>
    ))
  }
  render() {
    const { songs, loading } = this.props.data;

    if (loading) return <div>Loading data...</div>
    if (!songs) return <div>No songs added yet.</div>

    return (
      <div>
        <h1>List of songs</h1>

        <ul className="collection">
          {this.renderSongs()}
        </ul>
      </div>
    )
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`

export default graphql(query)(SongList)
