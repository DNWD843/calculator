import './Calculator.css';

const Calculator = () => {
  return (
    <div className="calculator page__calculator">
      <input type="text" readOnly value="123" className="calculator__screen"></input>
      <div className="calculator__buttons">
        <button className="calculator__button calculator__button_value_1">1</button>
        <button className="calculator__button calculator__button_value_2">2</button>
        <button className="calculator__button calculator__button_value_3">3</button>
        <button className="calculator__button calculator__button_value_4">4</button>
        <button className="calculator__button calculator__button_value_5">5</button>
        <button className="calculator__button calculator__button_value_6">6</button>
        <button className="calculator__button calculator__button_value_7">7</button>
        <button className="calculator__button calculator__button_value_8">8</button>
        <button className="calculator__button calculator__button_value_9">9</button>
        <button className="calculator__button calculator__button_value_0">0</button>
        <button className="calculator__button calculator__button_value_result">=</button>
        <button className="calculator__button calculator__button_value_plus">+</button>
        <button className="calculator__button calculator__button_value_minus">-</button>
        <button className="calculator__button calculator__button_value_multiply">x</button>
        <button className="calculator__button calculator__button_value_division">/</button>
        <button className="calculator__button calculator__button_value_dot">.</button>
        <button className="calculator__button calculator__button_value_CE">CE</button>
        <button className="calculator__button calculator__button_value_MC">MC</button>
        <button className="calculator__button calculator__button_value_MR">MR</button>
        <button className="calculator__button calculator__button_value_M-PLUS">M+</button>
        <button className="calculator__button calculator__button_value_M-MINUS">M-</button>
      </div>
    </div>
  );
};

export { Calculator };
