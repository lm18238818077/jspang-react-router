import React, { Component } from 'react'
import { Provider, Consumer } from './context'

export default class HashRouter extends Component {
  constructor(props){
    super(props)
    this.state={
      location:{
        pathname: window.location.hash.slice(1) || '/'
      },
    }
  }
  componentDidMount(){
    window.location.hash = window.location.hash || '/'
    window.addEventListener('hashchange',()=>{
      this.setState({
        location:{
          ...this.state.location,
          pathname: window.location.hash.slice(1) || '/'
        }
      })
    })
  }

  render() {
    const defalutValue = {
      location:this.state.location,
      history:{
        push: (val) => window.location.hash = val
      }
    }
    return (
      <Provider value={defalutValue}>
        {this.props.children}
      </Provider>
    )
  }
}
