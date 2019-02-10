import React, { Component } from 'react';
import './../css/error.css';


class Error extends Component {
    render() {
        return (
                <div className="text-center" id="error-handle">
                    <h3>Error404: Sorry this page does not exist!</h3>
                    <a href="/" >Back to HOME</a>
                </div>
        );
    }
}


export default Error;