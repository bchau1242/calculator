import React from "react";

const Calculator = () => {
  return (
    <div className="calculator bg-black flex flex-col items-end text-[#fff] text-3xl rounded-xl w-80 p-2 opacity-80">
      <div className="result text-6xl text-white mb-5">9</div>
      <div className="keypad grid grid-cols-4 gap-0.5">
        <button className="btn btn-ac">AC</button>
        <button className="btn">+/-</button>
        <button className="btn">%</button>
        <button className="btn btn-operation">÷</button>
        <button className="btn">7</button>
        <button className="btn">8</button>
        <button className="btn">9</button>
        <button className="btn btn-operation">x</button>
        <button className="btn">4</button>
        <button className="btn">5</button>
        <button className="btn">6</button>
        <button className="btn btn-operation">-</button>
        <button className="btn">1</button>
        <button className="btn">2</button>
        <button className="btn">3</button>
        <button className="btn btn-operation">+</button>
        <butto className="btn btn-zero col-span-2">0</butto>
        <button className="btn">.</button>
        <button className="btn btn-operation">=</button>
      </div>
    </div>
  );
};

export default Calculator;
