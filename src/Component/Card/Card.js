import React, { Component, Suspense } from "react";
import { Link } from "react-router-dom";
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
      imageID:this.props.imageID
    }
  }
  componentDidMount() {
    if(this.state.imageID !== 0){
      fetch(`http://139.59.81.94:5000/geTiMagE/${this.state.imageID}`).then(
        (users) => {
          this.setState({ image: users });
        }
      );
    }
  }
  render() {
    const { name, price, offer,id} = this.props;
    return (
      <div>
        {this.state.image.url !== null ? (
          <Suspense fallback={<p>...</p>}>
            <Link image={this.state.image} to={`/SingleProduct/${id}`} className="card">
              <div>
                <img className='card-img' src={this.state.image.url} alt=''/>
                <p className='pdnm'>{name}</p>
        <p className='ofr-price'>TK: {price}</p><p className='offerprice'>TK : {Math.floor(price - price*offer/100)}</p><p className='offerprice ofrprcnt'>{offer}% off</p>
              </div>
            </Link>
          </Suspense>
        ) : (
          <Suspense fallback={<p>...</p>}>
            <div></div>
          </Suspense>
        )}
      </div>
    );
  }
}
