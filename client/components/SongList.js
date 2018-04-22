import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import query from '../queries/fetchSongs'

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
        <Link to='songs/new'
        className='btn-floating btn-large red right'>
          <i className='material-icons'>add</i>
        </Link>
      </div>
    )
  }
}


export default graphql(query)(SongList)
