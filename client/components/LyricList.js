import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class LyricList extends PureComponent {
  render() {
    return (
      <div>
        <ul className="collection">
          {this.props.lyrics.map(({id, content}) => (
            <li
              className="collection-item"
              key={id}>{content}</li>
          ))}
        </ul>
      </div>
    )
  }

}

LyricList.propTypes = {
  lyrics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })).isRequired
}

export default LyricList;