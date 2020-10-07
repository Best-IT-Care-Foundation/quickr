
import React, { Component} from "react";
import CardList from "../Component/CardList/CardList";
export default class algoritom extends Component {
  componentDidMount() {
    fetch("http://139.59.81.94:5000/AllProduct")
      .then((response) => response.json())
      .then((users) => {this.setState({ robots: users });});
  }
  constructor() {
    super();
    this.state = {
      robots:[],
    };
  }
  render() {
    const viewID = this.props.id;
    const filterdata = this.state.robots.filter(data=>{
      if (data._id !== viewID) {
        return data;
      }
    });
return(
        <div className="algo">
              <CardList data={filterdata} />
      </div>
)
  }
}
