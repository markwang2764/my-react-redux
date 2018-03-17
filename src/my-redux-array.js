export default function arraythunk({dispatch,getState}) {
  return next => action => {
    if(Array.isArray(action)){
      return action.forEach(v=>dispatch(v))
    }
    return next(action)
  }
}