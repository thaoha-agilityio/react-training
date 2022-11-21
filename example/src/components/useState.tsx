import { Component, useState } from "react";

/**
 * Let you use state without writing a class.
 * Declare any new variable as state without being bound by this
 * Make the code more concise
 */
export const CountTime = (): JSX.Element => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleIncrease}>Click me</button>
    </div>
  );
};

export class CountTimeClass extends Component {
  state: {
    count: number;
  };

  constructor(props: Object) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render(): JSX.Element {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

const gifts: string[] = ["BMW", "MayBach", "G63"];

export const Cars = () => {
  const [gift, setGift] = useState("");

  const handleGift = () => {
    const index = Math.floor(Math.random() * gifts.length);

    setGift(gifts[index]);
  };

  return (
    <div className="app" style={{ padding: 20 }}>
      <h1>{gift || "No gift"}</h1>
      <button onClick={handleGift}>Click me !!</button>
    </div>
  );
};
