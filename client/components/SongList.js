import React, { PureComponent } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import query from '../queries/fetchSongs'

class SongList extends PureComponent {
  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => (
      <li
        key={id}
        className="collection-item">
        {title}
        <i
          className='material-icons'
          onClick={this.handleDeleteClick.bind(this, id)}
        >delete</i>
      </li>
    ))
  }

  handleDeleteClick(id, e) {
    e.preventDefault()
    this.props.mutate({
      variables: {
        id
      }
    }).then(() => this.props.data.refetch())
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

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      title
    }
  }
`

export default graphql(mutation)(
  graphql(query)(SongList)
)
