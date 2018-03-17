import React from 'react'
import {connect} from './my-react-redux';
import {addGun, removeGun, addGunAsync, addTwice} from './index.redux'
import ContextDemo from './context.demo';

@connect(
  // 你要state的什么属性放到props里
  state=>({num:state}),
  // 你要什么方法，放到props里
  {addGun, removeGun, addGunAsync, addTwice})
class App extends React.Component {
  render(){
    const num = this.props.num
    const addGun = this.props.addGun
    const removeGun = this.props.removeGun
    const addGunAsync = this.props.addGunAsync
    const addTwice = this.props.addTwice
    return (
      <div>
        <h1>现在有机枪{num}把</h1>
        <button
          onClick = {()=>addGun()}
        >
          申请武器
        </button>
        <button
          onClick = {()=>removeGun()}
        >
          上交武器
        </button>
        <button
          onClick = {()=>addGunAsync()}
        >
          拖两天再给
        </button>
        <button
          onClick = {()=>addTwice()}
        >
          申请两把
        </button>
        <ContextDemo></ContextDemo>
      </div>
    )
  }
}
export default App