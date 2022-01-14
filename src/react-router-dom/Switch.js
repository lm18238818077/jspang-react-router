import React, { Component } from "react";
import { Consumer } from "./context";
import { pathToRegexp } from "path-to-regexp";

export default class Switch extends Component {
  render() {
    return (
      <Consumer>
        {(state) => {
          let childrens = this.props.children;
          for (let i = 0; i < childrens.length; i++) {
            let child = childrens[i];
            let { path='', exact } = child.props;
            let reg = pathToRegexp(path, [], { end: exact });
            console.log(i)
            if (reg.test(state.location.pathname)) {
              return child;
            }
          }
          return null
        }}
      </Consumer>
    );
  }
}
