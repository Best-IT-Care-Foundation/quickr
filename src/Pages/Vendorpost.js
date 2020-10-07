import React, { Component,Suspense} from 'react'
import DU2 from '../Component/DsbrdUSR/DU2'
import {Link} from 'react-router-dom'
import uniqid from 'uniqid'
export default class User extends Component {
    componentWillMount() {
        fetch(`http://139.59.81.94:5000/getvendordata/${this.props.match.params.id}`)
        .then((response) => response.json())
        .then((users) => {
          this.setState({ name: users[0].name , email:users[0].email, access:users[0].access,NidUserID:users[0]._id});
        });
    }
constructor(){
    super();
    this.state = {
      name:undefined,
      email:undefined,
      file: null,
      file2: null,
      file3: null,
      vendor:"",
      iteam: "",
      access:false,
      price: "",
      description: "",
      tags: "",
      size: "",
      offer: "",
      BrandName: "",
      imageID:"",
      NidImage:"",
      NidUserID:"",
      addProduct: true,
      deleteProduct: false,
      editProduct: false,
      deleteId:'',
      vendorEdit: "",
      iteamEdit: "",
      priceEdit: "",
      descriptionEdit: "",
      tagsEdit: "",
      sizeEdit: "",
      offerEdit: "",
      BrandNameEdit: "",
      imageIDEdit: "",
      pdtId:'',
    } 
}
onpdctedit=event=>{
  fetch(`http://139.59.81.94:5000/Product/${event.target.value}`)
  .then((response) => response.json())
  .then((users) => {
    this.setState({pdtId:users[0]._id,imageID:users[0].imageID,vendorEdit:users[0].vendor,iteamEdit:users[0].iteam,priceEdit:users[0].price,BrandNameEdit:users[0].BrandName,descriptionEdit:users[0].description,tagsEdit:users[0].tags,sizeEdit:users[0].size,offerEdit:users[0].offer,imageIDEdit:users[0].imageID})
  });
}
ondeleteid=e=>{
  this.setState({deleteId:e.target.value})
}
fileChangeNID=event=>{
    this.setState({ NidImage: event.target.files[0]});
  }
onNIDUpload=()=>{
const formData = new FormData();
  formData.append("upload", this.state.NidImage);
  fetch(`http://139.59.81.94:5000/ProductPICNID/${this.props.match.params.id}`, {
    method: "POST",
    body:formData,
  });
  }
  onbrandnameupdate=e=>{
    this.setState({BrandNameEdit:e.target.value})
  }
  onoffrupdate=e=>{
    this.setState({offerEdit:e.target.value})
  }
  onsizeupdate=e=>{
    this.setState({sizeEdit:e.target.value})
  }
  ontagsupdate=e=>{
    this.setState({tagsEdit:e.target.value})
  }
  ondesupdate=e=>{
    this.setState({descriptionEdit:e.target.value})
  }
  onpriceupdate=e=>{
    this.setState({priceEdit:e.target.value})
  }
  onvendorupdate=e=>{
    this.setState({vendorEdit:e.target.value})
  }
onnameupdate=e=>{
  this.setState({iteamEdit:e.target.value})
}
  activateAddproduct=()=>{
    this.setState({addProduct:true,editProduct:false,deleteProduct:false})
  }
  activateEditproduct=()=>{
    this.setState({addProduct:false,editProduct:true,deleteProduct:false})
  }
  activateDeleteproduct=()=>{
    this.setState({addProduct:false,editProduct:false,deleteProduct:true})
  }
onBRANDChange=event=>{
    this.setState({ BrandName: event.target.value});
  }
  onvendorChange=event=>{
    this.setState({ vendor: event.target.value});
  }
  onofferChange=event=>{
    this.setState({ offer: event.target.value});
  }
  onsizeChange=event=>{
    this.setState({ size: event.target.value});
  }
  ontagChange=event=>{
    this.setState({ tags: event.target.value});
  }
  ondesChange=event=>{
    this.setState({ description: event.target.value});
  }
  onpriceChange=event=>{
    this.setState({ price: event.target.value});
  }
  oniteamChange=event=>{
    this.setState({imageID:uniqid()})
    this.setState({ iteam: event.target.value});
  }
  fileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };
  fileChange2 = (event) => {
    this.setState({ file2: event.target.files[0] });
  };
  fileChange3 = (event) => {
    this.setState({ file3: event.target.files[0] });
  };
  upload = () => {
    const formData = new FormData();
    formData.append("upload", this.state.file);
    formData.append("upload", this.state.file2);
    formData.append("upload", this.state.file3);
    formData.append("upload", this.state.imageID);
    fetch("http://139.59.81.94:5000/ProductPIC", {
      method: "POST",
      body:formData,
    }).then(alert("product Image uploaded"));
    fetch('http://139.59.81.94:5000/ProductADD', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        iteam : this.state.iteam,
        price : this.state.price,
        vendor:this.state.vendor,
        description : this.state.description,
        tags : this.state.tags,
        size : this.state.size,
        offer : this.state.offer,
        BrandName : this.state.BrandName,
        imageID:this.state.imageID
      })
    }).then(alert("product  uploaded"))
  };
  updateproduct=()=>{
    fetch(`http://139.59.81.94:5000/ProductEditV/${this.state.email}/${this.state.pdtId}`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        iteam: this.state.iteamEdit,
        price: this.state.priceEdit,
        vendor: this.state.vendorEdit,
        description: this.state.descriptionEdit,
        tags: this.state.tagsEdit,
        size: this.state.sizeEdit,
        offer: this.state.offerEdit,
        BrandName: this.state.BrandNameEdit
      }),
    }).then(alert("product Edited"));
  }
  ondeleteProduct=()=>{
    fetch(`http://139.59.81.94:5000/DeleteV/${this.state.email}/${this.state.deleteId}`,{
      method:"post"
    }).then(alert("product Deleted"))
  }
    render() {
      const {addProduct} = this.state;
      const {deleteProduct} = this.state;
      const {editProduct} = this.state;
      const style = addProduct ? { display: "block" } : { display: "none" };
      const style2 = deleteProduct ? { display: "block" } : { display: "none" };
      const style3 = editProduct ? { display: "block" } : { display: "none" };
        return (
            <div>
              <div className='opsLink'>
      <Link onClick={this.activateAddproduct} className='opsLink_' >Add Product</Link>
      <Link onClick={this.activateDeleteproduct} className='opsLink_' >Edit Product</Link>
      <Link onClick={this.activateEditproduct} className='opsLink_' >Delete Product</Link>
    </div>
            <DU2 id={this.props.match.params.id}/>
            <div  className='dsbrd-cntnt'>
                <p className='title'>Profile :</p>
                <p className='title-des'>Name : {this.state.name}</p>
                <p className='title-des'>Email : {this.state.email}</p>
                
                  {this.state.access ? (
          <Suspense fallback={<div>Loading...</div>}>
          <p className='vndr-right-ok'>You Have Rights to Add,Delete,Edit Product </p>
          </Suspense> 
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
          <div>
          <p className='vndr-right-warn'>You Have No Rights to Add,Delete,Edit Product </p>
          <p className='vndr-right-warn'>Submit Document to get access</p>
          <input
              className="img-admin-input"
              onChange={this.fileChangeNID}
              type="file"
            />
              <button className="btn-upld-pdtc" onClick={this.onNIDUpload}>
              Submit
            </button>
          </div>
          </Suspense>
        )}         
            </div> 
            <div className="main-admin">
        <div className="main-admin-content">
          <div style={style} className="addProduct">
            <p className='title-admin'>Add Product by Vendor</p>
            <input onChange={this.oniteamChange}
              className="admin-input"
              type="name"
              placeholder="Enter Product Name"
            />
            <input onChange={this.onvendorChange}
              className="admin-input"
              type="name"
              placeholder="Enter Vendor Name"
            />
            <input onChange={this.onpriceChange}
              className="admin-input"
              type="number"
              placeholder="Enter Product Price"
            />
            <input onChange={this.onofferChange}
              className="admin-input"
              type="number"
              placeholder="Enter Product Offer"
            />
            <input onChange={this.onsizeChange}
              className="admin-input"
              type="text"
              placeholder="Product Size (Upercase)"
            />
            <input onChange={this.onBRANDChange}
              className="admin-input"
              type="text"
              placeholder="Product Brand (lowercase)"
            />
            <textarea onChange={this.ondesChange}
              className="admin-txtarea"
              placeholder="Enter Product Description"
            />
            <textarea onChange={this.ontagChange}
              className="admin-txtarea"
              placeholder="Enter Product Tags , color , story by (lowercase)"
            />
            <input
              className="img-admin-input"
              onChange={this.fileChange3}
              type="file"
            />
            <input
              className="img-admin-input"
              onChange={this.fileChange}
              type="file"
            />
            <input
              className="img-admin-input"
              onChange={this.fileChange2}
              type="file"
            />
            <button className="btn-upld-pdtc" onClick={this.upload}>
              ADD Product
            </button>
          </div>
          <div style={style2} className="GetProductforEdit">
          <p className="title-admin">Edit Product</p>
          <input onChange={this.onpdctedit} className="admin-input" type="text" required></input>
          <p  className="edit-pdct-dtls">Name: {this.state.iteamEdit}</p>
          <p  className="edit-pdct-dtls">Price: {this.state.priceEdit}</p>
          <p  className="edit-pdct-dtls">Vendor: {this.state.vendorEdit}</p>
          <p  className="edit-pdct-dtls">
            Description: {this.state.descriptionEdit}
          </p>
          <p  className="edit-pdct-dtls">Tag's: {this.state.tagsEdit}</p>
          <p  className="edit-pdct-dtls">Size: {this.state.sizeEdit}</p>
          <p  className="edit-pdct-dtls">Offer: {this.state.offerEdit}</p>
          <p  className="edit-pdct-dtls">
            BrandName: {this.state.BrandNameEdit}
          </p>
          <input onChange={this.onnameupdate}
            className="admin-input"
            type="text"
            placeholder="Product  Name"
          ></input>
          <input onChange={this.onpriceupdate}
            className="admin-input"
            type="text"
            placeholder="Product  price"
          ></input>
          <input onChange={this.onsizeupdate}
            className="admin-input"
            type="text"
            placeholder="Product  Size"
          ></input>
          <input onChange={this.onoffrupdate}
            className="admin-input"
            type="text"
            placeholder="Product  offer"
          ></input>
          <input onChange={this.onbrandnameupdate}
            className="admin-input"
            type="text"
            placeholder="Product  Brand"
          ></input>
          <input onChange={this.onvendorupdate}
            className="admin-input"
            type="text"
            placeholder="Vendor Name"
          ></input>
          <textarea onChange={this.ondesupdate}
            className="admin-txtarea"
            placeholder="Enter Product Description"
          />
          <textarea onChange={this.ontagsupdate}
            className="admin-txtarea"
            placeholder="Enter Product Tags"
          />
          <button onClick={this.updateproduct} className="btn-upld-pdtc">
              Update Product
            </button>
        </div>
        <div style={style3} className="GetProductforEdit">
          <p className="title-admin">Delete Product</p>
          <input onChange={this.ondeleteid} className="admin-input" type="text" required></input>
          <button onClick={this.ondeleteProduct} className="btn-upld-pdtc">
              Delete Product
            </button>
        </div>
        </div>
      </div>
        </div>
        )
    }
}
