import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Logo extends Component {
    render() {
        const size = {
            height: this.props.size ? this.props.size : 105,
            width: this.props.size ? this.props.size : 105
        }
        return (
            <div className="logo-main">
                <Link to="/">
                    <img alt="daily smarty ui image" src="/assets/dailysmartylogo.jpeg" />
                </Link>
            </div>
        )
    }
}

export default Logo;