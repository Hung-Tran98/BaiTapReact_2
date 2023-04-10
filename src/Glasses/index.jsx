import React, { Component } from "react";
import "./style.css";

export default class GlassList extends Component {
  arrayGlass = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  renderGlass = () => {
    return this.arrayGlass.map((item, index) => {
      return (
        <div className="col-2" key={item.id}>
          <img className="imgGlass w-50 mb-2" src={item.url} alt={item.name} onClick={() => {
            this.setState({
              num: item.id,
            })
          }}/>
        </div>
      );
    });
  };

  state = {
    num: 0,
  }

  render() {
    return (
      <div>
        <div className="d-flex m-auto w-75">
          <div className="model1">
            <img
              className="imgModel m-5 position-relative"
              src="/glassesImage/model.jpg"
              alt="..."
            />

            <img
              className="imgGlass position-absolute"
              src="/glassesImage/v1.png"
              alt="..."
            />
          </div>

          <div className="model2">
            
            <img
              className="imgModel m-5 position-relative"
              src="/glassesImage/model.jpg"
              alt="..."
            />
            <img
              className="imgGlass position-absolute"
              src={`/glassesImage/v${this.state.num}.png`}
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <div className="row">{this.renderGlass()}</div>
        </div>
      </div>
    );
  }
}
