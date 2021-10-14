
import React from 'react'
import { useSelector } from 'react-redux'
const Notification = () => {
  const notification = useSelector(state => state.reducerNotification.message)
  const style = useSelector(state => state.reducerNotification.style)
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification