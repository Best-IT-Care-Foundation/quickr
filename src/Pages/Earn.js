import React, { Component } from 'react'
import DU from '../Component/DsbrdUSR/DU'

export default class Earn extends Component {
    componentDidMount() {
        fetch(`http://139.59.81.94:5000/getuserdata/${this.props.match.params.id}`)
        .then((response) => response.json())
        .then((users) => {
          this.setState({ earn: users[0].earn});
        });
    }
    onupdateform=()=>{
        fetch(`http://139.59.81.94:5000/updateEarn/${this.props.match.params.id}`,{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                earn:0,
            })
        })
    }
    constructor(){
        super()
        this.state={
        earn:'',
        history:[]
        }
    }
    render() {
        console.log(this.props.match.params.id);
        return (
            <div>
            <DU id={this.props.match.params.id}/>
            <div  className='dsbrd-cntnt'>
                <p className='title'>Earn From Affiliate</p>
                <p className='title-des'>Current Balance ৳ {this.state.earn}</p>
                <form>
                <p className='desE'>minimum Withdrawl ৳500 || Contact with Support then press Withdrawl</p>
                <input onClick={this.onupdateform} type='submit' className='withdrawform' value='Withdraw'></input>
            </form>
                </div>
                <p className='title'>Order history</p>
        </div>
        )
    }
}
