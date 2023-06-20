import React from "react";
import { useSpring, animated } from "react-spring";
import "./style.css";
import "../../app.css";

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 200 },
    number: n,
    delay: 700,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.h1 className="num">{number.to((n) => n.toFixed(0))}</animated.h1>;
};

export default Number;
