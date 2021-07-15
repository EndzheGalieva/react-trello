import React from 'react';
import PropTypes from 'prop-types';
class Card extends React.Component {
  render() {
    return (
      <p>card component</p>
    )
  }
}

Card.propTypes = {
  data: PropTypes.object.isRequired
}

export default Card;
