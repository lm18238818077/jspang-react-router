import React from "react";
import { HashRouter as Router, Route, Link, Redirect, Switch } from "./react-router-dom";

function Index(props) {
  console.log(props)
  return <h2>首页</h2>;
}

function List() {
  return <h2>列表页面</h2>;
}

function User() {
  return (
    <div>
      <Link to="/user/add">用户添加</Link>
      <Link to="/user/list">用户列表</Link>
      <Route path="/user/add" component={UserAdd}/>
      <Route path="/user/list" component={UserList}/>
    </div>
  )
}
function UserAdd() {
  return (
    <div>
      用户添加
    </div>
  )
}
function UserList() {
  return (
    <div>
      用户列表
    </div>
  )
}
function AppRouter() {
  return (
    <Router>
        <ul>
            <li> <Link to="/">首页</Link> </li>
            <li><Link to="/list">列表</Link> </li>
            <li><Link to="/user/">用户</Link> </li>
        </ul>
        <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/list" component={List} />
        <Route path="/user/:type?" component={User} />
        <Redirect to="/list"/>
      </Switch>
    </Router>
  );
}
export default AppRouter;