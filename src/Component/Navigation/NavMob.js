import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navmob.css'
export default class NavMob extends Component {
  Click=()=>{
    this.setState({menu:'block'});
  }
  CClick=()=>{
    this.setState({menu:'none'});
  }
  constructor(){
    super();
    this.state ={
      menu:"none",
    }
  }
  render() {
    const { menu } = this.state;
    const style = {display:menu};
    return (
      <div className='nav--main'>
        <div>
      <div className="navigation">
        <div className="bars" onClick={this.Click}>
          {}
        <i className="fas fa-bars"></i>
        </div>
        <div className="logo">
          <Link to=''>3pshopping</Link>
        </div>
        <div className="pr-container">
          {/* <Link to="/">
            <div className="pre-container-link-div">
              <i className="fas fa-user-circle"></i>
            </div>
          </Link> */}
          <Link to="/">
            <div className="pre-container-link-div">
              <i className="fas fa-shopping-bag"></i>
            </div>
          </Link>
        </div>
      </div>
      <div style={style} className="nav">
      <div className='times_div'onClick={this.CClick}>
      <i className="fas fa-times"></i>
      </div>
        <div className='offer'>
        </div>
        <Link onClick={this.CClick} className="menu-link " to="/product/men">
          Men
        </Link>
        <Link onClick={this.CClick} className="menu-link " to="/product/women">
          Women
        </Link>
        <Link onClick={this.CClick} className="menu-link " to="/product/kids">
          Kids
        </Link>
        <Link onClick={this.CClick} className="menu-link " to="/product/home living">
          Home & Living
        </Link>
        <Link onClick={this.CClick} className="menu-link " to="/product/essentials">
          Essentials
        </Link>
        <Link onClick={this.CClick} className="menu-link " to="/product">
          Contact Us
        </Link>
        <Link onClick={this.CClick} className="menu-link " to="/product/Login">
          Login
        </Link>
        <Link onClick={this.CClick} className="menu-link " to="/Join">
        Become a Vendor
        </Link>
        <Link onClick={this.CClick} className="menu-link " to="/Login">
        Profile
        </Link>
        <Link onClick={this.CClick} className="menu-link " to="/Login">
        Login
        </Link>
        <Link onClick={this.CClick} className="menu-link " to="/">
        পুরাতন পন্য ক্রয় বিক্রয়
        </Link>
      </div>
    </div>
      </div>
    )
  }
}
