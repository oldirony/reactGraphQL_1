import React, {Component} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class SongCreate extends Component {
  constructor() {
    super()
    this.state = {
      songTitle: '',
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
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Create</h1>
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