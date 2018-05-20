import React, { Component} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link, Redirect } from 'react-router-dom'
import fetchSongsQuery from '../queries/fetchSongs'

class SongCreate extends  Component {
  constructor() {
    super()
    this.state = {
      songTitle: '',
      redirectBack: false,
    }
  }

  handleInputChange(e) {
    this.setState({
      songTitle: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    if (!this.state.songTitle) return

    this.props.mutate({
      variables: {
        title: this.state.songTitle,
      },
      refetchQueries: [{
        query: fetchSongsQuery,
      }]
    }).then(this.handleSongAdded.bind(this))
  }

  handleSongAdded() {
    this.setState({
      redirectBack: true,
    })

    return this;
  }

  render() {
    if (this.state.redirectBack) return <Redirect to='/' push />

    return (
      <div>
        <Link to='/'>Back</Link>
        <h1>Create song</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor='songTitle'>Song title</label>
          <input id='songTitle'
                 name='songTitle'
                 value={this.state.songTitle}
                 onChange={e => this.handleInputChange(e)}/>
        </form>
      </div>
    )
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`

export default graphql(mutation)(SongCreate)