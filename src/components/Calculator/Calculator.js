import { useCalculator } from '../../hooks/useCalculator';
import classNames from 'classnames';
import './Calculator.css';

/**
 * @module Calculator
 * @description Компонент Calculator.</br>Отвечает за отрисовку калькулятора.
 * @since v.1.0.0
 * @returns {JSX}
 */
const Calculator = () => {
  const {
    value,
    handleChangeValue,
    handleResetValue,
    handleComputeResult,
    handleMemoPlusClick,
    handleMemoMinusClick,
    handleMemoClearClick,
    handleMemoResultClick,
    handleComputeSin,
    handleComputeCos,
    handleComputeTg,
    handleComputeCtg,
    handleComputeSqrt,
    handleBackspaceClick,
    isMemoPlusEmpty,
    isMemoMinusEmpty,
    isRadValue,
  } = useCalculator();

  const mPlusScreenSegmentClassName = classNames(
    'calculator__screen-segment',
    'calculator__screen-segment_type_m-plus',
    {
      'calculator__screen-segment_visible': !isMemoPlusEmpty,
    },
  );

  const mMinusScreenSegmentClassName = classNames(
    'calculator__screen-segment',
    'calculator__screen-segment_type_m-minus',
    {
      'calculator__screen-segment_visible': !isMemoMinusEmpty,
    },
  );

  const radianSegmentClassName = classNames(
    'calculator__screen-segment',
    'calculator__screen-segment_type_rad',
    {
      'calculator__screen-segment_visible': isRadValue,
    },
  );

  return (
    <div className="calculator page__calculator">
      <div className="calculator__screen-field">
        <span className={mPlusScreenSegmentClassName}>M+</span>
        <span className={mMinusScreenSegmentClassName}>M-</span>
        <span className={radianSegmentClassName}>rad</span>
        <input type="text" readOnly value={value} className="calculator__screen"></input>
      </div>

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
