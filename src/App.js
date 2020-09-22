import React, { Component } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";

class App extends Component {
  state = {
    total: 0,
    proudcts: [
      {
        name: "Blue T-shirt ",
        image: "https://www.uniprint.ph/wp-content/uploads/2019/04/royal.jpg",
        description: "Blue T-shirt",
        price: 20.0,
        counter: 0,
      },
      {
        name: "Red T-shirt ",
        image:
          "https://cdn.shopify.com/s/files/1/0013/7743/5701/products/53541b_large.jpg?v=1578566092",
        description: "Red T-shirt",
        price: 40.0,
        counter: 0,
      },
      {
        name: "Green T-shirt ",
        image:
          "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/943371/1.jpg?9990",
        description: "Green T-shirt",
        price: 50.0,
        counter: 0,
      },
      {
        name: "black T-shirt ",
        image:
          "https://cdn.shopify.com/s/files/1/0862/2088/products/MIESAI-Mono-Navy-2.jpg?v=1525114950",
        description: "black T-shirt",
        price: 20.0,
        counter: 0,
      },
    ],
  };
  constructor() {
    super();
  }
  updatePrice(price) {
    let totals = this.state.total + price;
    this.setState({
      total: totals,
    });
  }
  updatePriceM(price) {
    let totals = this.state.total - price;
    this.setState({
      total: totals,
    });
  }
  removeItem(index, d) {
    const list = this.state.proudcts;

    list.splice(index, 1);
    this.setState({ list });
    let net = d.price * d.counter;
    let totals = this.state.total - net;
    this.setState({
      total: totals,
    });
  }
  addToCart(i, d) {
    let c = d.counter + 1;
    const list = this.state.proudcts;
    list[i] = { ...list[i], counter: c };
    this.setState({ list });

    this.updatePrice(d.price);
  }
  takeOfCart(i, d) {
    if (d.counter >= 1) {
      let c = d.counter - 1;
      const list = this.state.proudcts;
      list[i] = { ...list[i], counter: c };
      this.setState({ list });

      this.updatePriceM(d.price);
    }
  }
  render() {
    const listItems = this.state.proudcts.map((d, i) => (
      <table key={i}>
        <tr>
          <td>
            <img src={d.image} alt="new"></img>
          </td>
          <td class="tds">
            {" "}
            <figcaption>
              <h4 className="title"> {d.name}</h4>
              <p className="desc">{d.description}</p>
            </figcaption>
          </td>
          <td className="tdd"></td>
          <td>
            {" "}
            <Button
              variant="link"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                color: "black",
              }}
              onClick={() => {
                this.takeOfCart(i, d);
              }}
            >
              &minus;
            </Button>
            <div className="numOfItem">{d.counter}</div>
            <Button
              style={{
                fontWeight: "bold",
                fontSize: "32px",
                color: "black",
              }}
              variant="link"
              onClick={() => {
                this.addToCart(i, d);
              }}
            >
              +
            </Button>
          </td>

          <td>
            <div className="tdprice">${d.price}</div>
          </td>
          <td class="tdd">
            {" "}
            <Button
              style={{
                color: "darkgrey",
                fontSize: "38px",
              }}
              variant="link"
              onClick={() => this.removeItem(i, d)}
            >
              &times;
            </Button>
          </td>
        </tr>
      </table>
    ));

    return (
      <div class="Container">
        <h1>Shopping Cart</h1>

        <br />
        <div className="list">
          <figure className=" wrp">
            {listItems}{" "}
            <div class="price">
              Subtotal: <span className="totalPrice"> ${this.state.total}</span>
            </div>
          </figure>
        </div>
      </div>
    );
  }
}

export default App;
