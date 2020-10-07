import React from "react";
import Card from "../Card/Card";
function CardList({ data }) {
  const data1 = data;
  return <div>{data1.map((data, i) => {
return (
  <div key={i} className="opscard">
  <Card
  id={data._id}
    name={data.iteam}
    price={data.price}
    offer={data.offer}
    imageID={data.imageID}
  />
</div>
)
  })}</div>;
}

export default CardList;
