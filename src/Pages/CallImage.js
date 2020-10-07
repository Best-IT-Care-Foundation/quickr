import React, { Component } from 'react'

export default class CallImage extends Component {
    componentDidMount(){
        fetch(`http://139.59.81.94:5000/geTiMagE2/${this.state.imageID}`).then(
            (users) => {
              this.setState({ image: users });
            }
          );
    }
constructor(props){
    super(props);
    this.state={
        image:[],
        imageID:props.imageID
    }
}
    render() {
        return (
            <div className='blbl'>
                <img className='card-img-s' src={this.state.image.url} alt=''/>
            </div>
        )
    }
}
