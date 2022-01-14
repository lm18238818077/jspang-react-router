import React, { Component } from 'react'
import { Provider, Consumer } from './context'
import {pathToRegexp} from 'path-to-regexp'

export default class Route extends Component {
  render() {
    const { path, component: Comp, exact= false } = this.props
    const reg = pathToRegexp(path,[],{end:exact})
    return (
      <Consumer>
        {(state)=>{
          console.log(reg)
          if(reg.test(state.location.pathname)){
            return <Comp/>
          }
        }}
      </Consumer>
    )
  }
}
