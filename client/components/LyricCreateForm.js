import React, {PureComponent} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import propTypes from 'prop-types'

class LyricCreateForm extends PureComponent {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <label htmlFor="addLyric">Add lyric</label>
        <input name="addALyric"
               onChange={this.handleInputChange.bind(this)}
               value={this.state.value}/>
        <button className={"btn"}>Add</button>
      </form>
    )
  }

  handleInputChange({target: { value }}) {
    this.setState({
      value
    })
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        songId: this.props.songId,
        content: this.state.value,
      }
    }).then(() => this.setState({ value: '' }))
  }
}

LyricCreateForm.propTypes = {
  songId: propTypes.string.isRequired,
}

const mutation = gql`
  mutation AddLyric($content:String!, $songId: ID!) {
    addLyricToSong(content:$content, songId:$songId) {
      id,
      lyrics {
        id
        content
        likes
      }
    }
  }
`

export default graphql(mutation)(LyricCreateForm)