import React, { Component } from "react";
import CardList from "../Component/CardList/CardList";
const axios = require('axios').default;
export default class Feature extends Component {
  componentDidMount() {
    axios.get("http://139.59.81.94:5000/AllProduct").then((data) => {
      this.setState({ robots: data.data });
    });
  }
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }
  render() {
    return (
      <div className="fpd">
        <h2 className="fp">{this.props.name}</h2>
        <CardList data={this.state.robots} />
      </div>
    );
  }
}
