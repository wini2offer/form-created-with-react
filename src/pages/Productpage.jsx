import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Productpage = () => {
  const image1 =
    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/81/7389062/1.jpg?4032";
  const image2 =
    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/96/0169852/1.jpg?1413";
  const image3 =
    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/65/4929752/1.jpg?1731";
  const image4 =
    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/94/6199951/1.jpg?8807";
  const image5 =
    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/38/6732352/1.jpg?7048";
  const image6 =
    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/42/786456/1.jpg?0173";
  const image7 =
    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/87/1218882/1.jpg?3148";
  const image8 =
    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/21/1218882/1.jpg?1543";
  const image9 =
    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/05/3732962/1.jpg?6217";
  const image10 =
    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/69/0218882/1.jpg?5589";

  return (
    <div>
      <Navbar />
      <div className="card-container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
        <Card
          name="Android"
          description="Tablet"
          price="200000"
          picture={image1}
        />
        <Card
          name="Atouch"
          description="Tablet"
          price="140000"
          picture={image2}
        />
        <Card
          name="Idea"
          description="Tablet"
          price="160000"
          picture={image3}
        />
        <Card
          name="Cdea"
          description="Tablet"
          price="120000"
          picture={image4}
        />
        <Card
          name="Iphone"
          description="Phone"
          price="120000"
          picture={image5}
        />
        <Card
          name="Cdea"
          description="Tablet"
          price="120000"
          picture={image6}
        />
        <Card
          name="Cdea"
          description="Tablet"
          price="120000"
          picture={image7}
        />
        <Card
          name="Cdea"
          description="Tablet"
          price="120000"
          picture={image8}
        />
        <Card
          name="Cdea"
          description="Tablet"
          price="120000"
          picture={image9}
        />
        <Card
          name="Cdea"
          description="Tablet"
          price="120000"
          picture={image10}
        />
      </div>
    </div>
  );
};

export default Productpage;
