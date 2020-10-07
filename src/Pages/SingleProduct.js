import React, { Component, Suspense } from "react";
import { Link } from "react-router-dom";
import CallImage from './CallImage'
import Callimage2 from './callimage2';
import Callimage3 from './callimage3';
// import Algo from './algoritom'
export default class SingleProduct extends Component {
  componentDidMount() {
    if (this.state.id.length > 0) {
      fetch(`http://139.59.81.94:5000/Product/${this.state.id}`)
        .then((response) => response.json())
        .then((users) => {
          this.setState({ data: users[0] });
        });
    }
  }
  constructor(props) {
    super();
    this.state = {
      image: [],
      id: props.match.params.id,
      data: [],
    };
  }
  render() {
    const { price,iteam,offer,size,description,_id} = this.state.data;
    return (
      <div className='single-product-for-mob'>
      <div className='img_Cntnt-s'>
      <div>
      {price !== undefined ? (
            <Suspense fallback={<p>...</p>}>
              <div className='img-img-s'>
                <CallImage  imageID={this.state.data.imageID}/>
                <Callimage3  imageID={this.state.data.imageID}/>
                <Callimage2  imageID={this.state.data.imageID}/>
              </div>
            </Suspense>
          ) : (
            <Suspense fallback={<p>...</p>}>
              <div></div>
            </Suspense>
          )}
      </div>
      <div>
      <Suspense fallback={<p>...</p>}>
          <div className="cntnt-single">
            <h3>{iteam}</h3>
            <p className='offerprice2'>TK : {Math.floor(price - price*offer/100)}</p><h6 className='ofr-price2'>TK: {price}</h6><p className='offerprice ofrprcnt2'>({offer}% off)</p>
            <p className='txs'>inclusive of all taxes</p>
            <p className='pdctid'>Product ID : {_id}</p>
            <p className='size'>Select Size</p>
            <p className='ssz'>{size}</p>
            <div className='atc' >

            <Link to={`/cart/${this.state.id}/${price}`} className='atcLink'>Add To Cart</Link>
            </div>
            <p className='description'>{description}</p>
          </div>
        </Suspense>
        <Suspense fallback={<p>...</p>}>
          <div></div>
        </Suspense>
      </div>
      </div>
      {/* <Algo id={this.state.id}/> */}
      </div>
    );
  }
}
