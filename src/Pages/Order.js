import React from 'react'
import DU from '../Component/DsbrdUSR/DU'
export default function User() {
    return (
        <div>
            <DU />
            <div  className='dsbrd-cntnt'>
                <p className='title'>Orders</p>
<div className='orders'>
<p className='title-des'>Pending Order </p>
                <p className='title-des'>1</p>
</div>
<div className='orders'>
<p className='title-des'>Completed Order </p>
                <p className='title-des'>1</p>
</div>
<div className='orders'>
<p className='title-des'>Eject Order </p>
                <p className='title-des'>1</p>
</div>
            </div>
            <div className='oh'>
            <p className='title'>Orders History</p>
<div>
<p className='odr-des'>Product Name :</p>
                <p className='odr-des'>Quatity</p>
                <p className='odr-des'>Price</p>
                <p className='odr-des'>Total</p>
</div>
            <p className='odr-des'>1.</p>
            <p className='odr-des'>Mango</p>
                <p className='odr-des'>2 Pice</p>
                <p className='odr-des'>250</p>
                <p className='odr-des'>500</p>
            </div>
        </div>
    )
}