import React from 'react'
import PropTypes from 'prop-types'

class Sidebar extends React.Component{
  render(){
    return (
      <div>
        <p>侧边栏</p>
        <Navbar></Navbar>
      </div>
    )
  }
}
//无状态组件  function Navbar(props,context){}
class Navbar extends React.Component{
  static contextTypes = {
    user: PropTypes.string
  }
  render(){
    console.log(this.context);
    return (
      <div>{this.context.user}的导航栏</div>
    )
  }
}
export default class Page extends React.Component{
  static childContextTypes = {
    user: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state={user: 'me'}
  }
  getChildContext(){
    return this.state
  }
  render(){
    return (
      <div>
        <p>我是{this.state.user}</p>
        <Sidebar></Sidebar>
      </div>
    )
  }
}