import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

class LyricList extends PureComponent {
  onLike(id, currentLikes) {
    this.props.mutate({
      variables: {id},
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: currentLikes + 1
        }
      }
    })
  }

  render() {
    return (
      <div>
        <ul className="collection">
          {this.props.lyrics.map(({id, content, likes}) => (
            <li
              className="collection-item"
              key={id}>
              <div className="vote-box">
                <span className="vote-box__content">{content}</span>
                <i
                  className='material-icons'
                  onClick={() => this.onLike(id, likes)}>thumb_up</i>
                {likes}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }

}


const mutation = gql`
    mutation LikeLyric ($id: ID){
        likeLyric(id:$id) {
            id
            likes
        }
    }
`

LyricList.propTypes = {
  lyrics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  })).isRequired
}

export default graphql(mutation)(LyricList)