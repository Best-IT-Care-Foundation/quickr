import React from 'react'
import {Link} from 'react-router-dom'
export default function DU(props) {
  const id = `/Earn/${props.id}`
  const id2 = `/profile/${props.id}`
  return (
    <div className="dsbrd">
    <div className="links-dsbrd">
      <Link className="dsLnk" to={id2}>
       Profile
      </Link>
      <Link className="dsLnk" to={id} >
        Earn
      </Link>
      <Link className="dsLnk" to="/Login">
        Logout
      </Link>
    </div>
  </div>
  )
}
