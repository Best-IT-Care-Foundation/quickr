import React from 'react'
import {Link} from 'react-router-dom'
export default function DU(props) {
  const id2 = `/vendor/${props.id}`
  return (
    <div className="dsbrd">
    <div className="links-dsbrd">
      <Link className="dsLnk" to={id2}>
       Profile
      </Link>
      <Link className="dsLnk" to="/VendorLogin">
        Logout
      </Link>
    </div>
  </div>
  )
}