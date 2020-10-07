import React from 'react'
import './TopNav.css'
import {Link} from 'react-router-dom'
export default function TopNav() {
    return (
        <div className='top-nav'>
            <p className='wlcm'>QuickrBD অনলাইন শপিং সে্টোরে আপনাকে স্বাগতম</p>
            <div className='links-div'>
                <Link className='link linkold' style={{color: "white"}} to=''>পুরাতন পন্য ক্রয় বিক্রয়</Link>
                <Link className='link' to='/Join'>Become a Vendor</Link>
                <Link className='link' to='/Login'>Profile</Link>
                <Link className='link' to='/Login'>Login</Link>
            </div>
        </div>
    )
}
