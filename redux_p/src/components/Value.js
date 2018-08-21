import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    number: PropTypes.number
};
const defaultProps ={
    number: -1//Parent에서 값을 가지지 못한것을 의미
};

class Value extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value;