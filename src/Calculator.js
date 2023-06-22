import React, { useState } from "react";

const Calculator = () => {
  return (
    <div className="calculator">
      <input type="text" />
      <div className="keypad">
        <div>
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button>÷</button>
        </div>
        <div>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>x</button>
        </div>
        <div>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>
        <div>
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
