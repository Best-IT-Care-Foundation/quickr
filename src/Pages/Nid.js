import React, { Component } from 'react'

export default class CallImage extends Component {
    componentDidMount(){
        fetch(`http://139.59.81.94:5000/geTNidiMagE/${this.state.imageID}`).then(
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
            <div className='nid-div'>
                <img className='nid-img-s' src={this.state.image.url} alt=''/>
            </div>
        )
    }
}
