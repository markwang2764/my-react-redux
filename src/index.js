import React from 'react'
import ReactDom from 'react-dom'
// import {createStore,applyMiddleware,compose} from 'redux';
import { createStore,applyMiddleware } from './my-redux'
import thunk from './my-redux-thunk';
import arrThunk from './my-redux-array';
import {Provider} from './my-react-redux'
import App from './app.js'
import {counter,addGun,addGunAsync,removeGun} from './index.redux'
// const reduxDevtools = window.devToolsExtension?window.devToolsExtension():f=>f
// const store = createStore(
//     counter,
//     compose(
//       applyMiddleware(thunk),
//       reduxDevtools
//     )
//   )
const store = createStore(counter,applyMiddleware(thunk,arrThunk))

ReactDom.render(
<Provider store={store}>
   <App />
</Provider>,
document.getElementById('root'))


