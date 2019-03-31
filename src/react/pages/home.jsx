import React from 'react';
import PropTypes from 'prop-types';

/* Placeholder for the root (/) page */

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Home page placeholder
      </div>
    );
  }
}

Home.propTypes = {
  location: PropTypes.object,
  hierarchy: PropTypes.array,
};
