import React, { Component } from 'react'

class Data extends Component {
    render() {
        return (
            <div>
                <h2> title : {this.props.title} </h2>
                <img src={this.props.imgSrc} alt={this.props.title} title='animal image' />
                <p> description : {this.props.description} </p>
           
            </div>
        )
    }
}

export default Data
