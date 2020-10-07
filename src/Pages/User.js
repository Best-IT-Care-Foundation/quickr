import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DU from '../Component/DsbrdUSR/DU'
export default class User extends Component {
    componentDidMount() {
        fetch(`http://139.59.81.94:5000/getuserdata/${this.props.match.params.id}`)
        .then((response) => response.json())
        .then((users) => {
          this.setState({ name: users[0].name , email:users[0].email,Refferal:users[0].ownrefferal });
        });
        fetch(`http://139.59.81.94:5000/gethistory/${this.props.match.params.id}`).then(res=>res.json()).then(res=>{this.setState({history:res})})
    }
    deleteAccount=()=>{
        fetch(`http://139.59.81.94:5000/delete/${this.props.match.params.id}`,{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
        })
    }
    onupdateform=()=>{
        fetch(`http://139.59.81.94:5000/update/${this.props.match.params.id}`,{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                email:this.state.email,
                name:this.state.name
            })
        })
    }
    onEmailChange=(event)=>{
        this.setState({email:event.target.value})
    }
    onnameChange=(event)=>{
        this.setState({name:event.target.value})
    }
constructor(){
    super();
    this.state = {
      name:undefined,
      email:undefined,
      Refferal:undefined,
      history:[]
    }
    
}
    render() {
        return (
            <div>
            <DU id={this.props.match.params.id}/>
            <div  className='dsbrd-cntnt'>
                <p className='title'>Profile :</p>
                <p className='title-des'>Name : {this.state.name}</p>
                <p className='title-des'>Email : {this.state.email}</p>
                <p className='title-des'>Refferal Number : {this.state.Refferal}</p>
                <Link onClick={this.deleteAccount} to='/Login' className='title-des-btn'>Delete Account</Link>
            </div>
            <form className='update-form'>
                <input onChange={this.onnameChange} type='name' placeholder='Enter new Name'></input>
                <input onChange={this.onEmailChange} type='email' placeholder='Enter new Email'></input>
                <input type='submit' onClick={this.onupdateform} value='Update Profile'></input>
            </form>
            <p className='title'>Order History</p>
            <div>
                {this.state.history.length===0?(<p style={{color:'#444',margin:'50px',fontWeight:"600"}}>There is no History.....</p>):(<div>
                                    {
                    this.state.history.map((data,i)=>{
                        return (
                            <div>
                                <span style={{color:'#2992cc',margin:'70px 20px',fontWeight:"600"}}>{i + 1}</span>
                                <span style={{color:'#2992cc',margin:'70px 20px',fontWeight:"600"}}>Order ID : {data.history}</span>
                                <span style={{color:'#2992cc',margin:'70px 0px',fontWeight:"600"}}>Order Complete Date : {data.date}</span>
                            </div>
                        )
                    })
                }
                </div>)}
            </div>
        </div>
        )
    }
}
