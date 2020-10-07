import React from 'react'
import {Link} from 'react-router-dom'
export default function Delivary(props){
    return (
        <div className='cart-withorder'>
        <h5>{'Currently two Payment Option Avilable'}</h5>
        <h5>{'1. Pay Online'}</h5>
        <h5>{'2. Cash on Delivary'}</h5>
        <p className='warn-card'>{'Contact With Those Number For Purchase , Pay after Contact'}</p>
            <h2>Your Order ID: <p className='orderid'>{props.match.params.id}</p></h2>
            <h2>Bkash NUmber: <p className='orderid'>{'+8801710-163592'}</p></h2>
            <h2>Rocket NUmber: <p className='orderid'>{'+8801753-998856'}</p></h2>
            <h2>Nogod NUmber: <p className='orderid'>{'+8801713-085167'}</p></h2>
            <Link to={`/AuthLog/${props.match.params.id}/${props.match.params.price}`} className='atcLink'>Ordered Completed</Link>
        </div>
    )
}
