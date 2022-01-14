import React, { Component } from 'react'
import { Consumer } from './context'

export default class Redirect extends Component {
  render() {
    return (
      <Consumer>
        {(state) => {
          console.log(222)
          state.history.push(this.props.to)
          return null
        }}
      </Consumer>
    )
  }
}
