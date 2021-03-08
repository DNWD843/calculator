import { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [value, setValue] = useState('0');
  const [memoPlusValue, setMemoPlusValue] = useState(0);
  const [memoMinusValue, setMemoMinusValue] = useState(0);

  const handleChangeValue = (evt) => {
    if (value === '0' || !value) {
      setValue(evt.target.value);
    } else {
      setValue(value + evt.target.value);
    }
  };

  const handleResetValue = () => {
    setValue('0');
  };

  const handleErrors = (action) => {
    try {
      const result = action(+value);
      if (isNaN(result)) {
        throw Error();
      } else {
        setValue(result.toString());
      }
    } catch {
      const prevValue = value;
      setValue('Ошибка!');
      setTimeout(() => {
        setValue(prevValue);
      }, 1500);
    }
  };

  const handleComputeResult = () => {
    try {
      const result = eval(value);
      if (result === Infinity) {
        throw Error();
      } else {
        setValue(result.toString());
      }
    } catch {
      const prevValue = value;
      setValue('Ошибка!');
      setTimeout(() => {
        setValue(prevValue);
      }, 1500);
    }
  };

  const handleMemoPlusClick = () => {
    try {
      if (isNaN(+value)) {
        throw Error();
      } else {
        const newValue = memoPlusValue + +value;
        setMemoPlusValue(newValue);
      }
    } catch {
      const prevValue = value;
      setValue('Ошибка!');
      setTimeout(() => {
        setValue(prevValue);
      }, 1500);
    }
  };
  const handleMemoMinusClick = () => {
    try {
      if (isNaN(+value)) {
        throw Error();
      } else {
        const newValue = memoMinusValue + +value;
        setMemoMinusValue(newValue);
      }
    } catch {
      const prevValue = value;
      setValue('Ошибка!');
      setTimeout(() => {
        setValue(prevValue);
      }, 1500);
    }
  };
  const handleMemoResultClick = () => {
    const memoResultValue = memoPlusValue - memoMinusValue;
    setValue(memoResultValue.toString());
  };

  const handleMemoClearClick = () => {
    setMemoPlusValue(0);
    setMemoMinusValue(0);
  };

  const handleComputeSin = () => {
    handleErrors(Math.sin);
  };

  const handleComputeCos = () => {
    handleErrors(Math.cos);
  };

  const handleComputeTg = () => {
    handleErrors(Math.tan);
  };

  const handleComputeCtg = () => {
    handleErrors((a) => 1 / Math.tan(a));
  };

  const handleComputeSqrt = () => {
    handleErrors(Math.sqrt);
  };

  const handleBackspaceClick = () => {
    if (value.length > 1) {
      setValue(value.slice(0, value.length - 1));
    } else {
      setValue('0');
    }
  };

  return (
    <div className="calculator page__calculator">
      <input type="text" readOnly value={value} className="calculator__screen"></input>
      <div className="calculator__buttons">
        <button
          type="button"
          onClick={handleChangeValue}
          className="calculator__button calculator__button_value_1"
          value="1"
        >
          1
        </button>
        <button
          type="button"
          onClick={handleChangeValue}
          className="calculator__button calculator__button_value_2"
          value="2"
        >
          2
        </button>
        <button
          type="button"
          onClick={handleChangeValue}
          className="calculator__button calculator__button_value_3"
          value="3"
        >
          3
        </button>
        <button
          type="button"
          onClick={handleChangeValue}
          className="calculator__button calculator__button_value_4"
          value="4"
        >
          4
        </button>
        <button
          type="button"
          onClick={handleChangeValue}
          className="calculator__button calculator__button_value_5"
          value="5"
        >
          5
        </button>
        <button
          type="button"
          onClick={handleChangeValue}
          className="calculator__button calculator__button_value_6"
          value="6"
        >
          6
        </button>
        <button
          type="button"
          onClick={handleChangeValue}
          className="calculator__button calculator__button_value_7"
          value="7"
        >
          7
        </button>
        <button
          type="button"
          onClick={handleChangeValue}
          className="calculator__button calculator__button_value_8"
          value="8"
        >
          8
        </button>
        <button
          type="button"
          onClick={handleChangeValue}
          className="calculator__button calculator__button_value_9"
          value="9"
        >
          9
        </button>
        <button
          type="button"
          onClick={handleChangeValue}
          className="calculator__button calculator__button_value_0"
          value="0"
        >
          0
        </button>
        <button
          type="button"
          onClick={handleComputeResult}
          className="calculator__button calculator__button_value_result"
        >
          =
        </button>
        <button
          type="button"
          onClick={handleChangeValue}
          className="calculator__button calculator__button_value_plus"
          value="+"
        >
          +
        </button>
        <button
          type="button"
          onClick={handleChangeValue}
          className="calculator__button calculator__button_value_minus"
          value="-"
        >
          -
        </button>
        <button
          type="button"
          onClick={handleChangeValue}
          className="calculator__button calculator__button_value_multiply"
          value="*"
        >
          x
        </button>
        <button
          type="button"
          onClick={handleChangeValue}
          className="calculator__button calculator__button_value_division"
          value="/"
        >
          /
        </button>
        <button
          type="button"
          onClick={handleChangeValue}
          className="calculator__button calculator__button_value_dot"
          value="."
        >
          .
        </button>
        <button
          type="button"
          onClick={handleResetValue}
          className="calculator__button calculator__button_value_C"
        >
          C
        </button>
        <button
          type="button"
          onClick={handleMemoClearClick}
          className="calculator__button calculator__button_value_MC"
        >
          MC
        </button>
        <button
          type="button"
          onClick={handleMemoResultClick}
          className="calculator__button calculator__button_value_MR"
        >
          MR
        </button>
        <button
          type="button"
          onClick={handleMemoPlusClick}
          className="calculator__button calculator__button_value_M-PLUS"
        >
          M+
        </button>
        <button
          type="button"
          onClick={handleMemoMinusClick}
          className="calculator__button calculator__button_value_M-MINUS"
        >
          M-
        </button>

        <button
          type="button"
          onClick={handleComputeSin}
          className="calculator__button calculator__button_value_sin"
        >
          sin
        </button>
        <button
          type="button"
          onClick={handleComputeCos}
          className="calculator__button calculator__button_value_cos"
        >
          cos
        </button>
        <button
          type="button"
          onClick={handleComputeTg}
          className="calculator__button calculator__button_value_tg"
        >
          tg
        </button>
        <button
          type="button"
          onClick={handleComputeCtg}
          className="calculator__button calculator__button_value_ctg"
        >
          ctg
        </button>
        <button
          type="button"
          onClick={handleComputeSqrt}
          className="calculator__button calculator__button_value_sqrt"
        >
          &#8730;
        </button>
        <button
          type="button"
          onClick={handleBackspaceClick}
          className="calculator__button calculator__button_value_backspace"
        >
          &#10233;
        </button>
      </div>
    </div>
  );
};

export { Calculator };
