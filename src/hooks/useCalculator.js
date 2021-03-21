import { useState, useCallback } from 'react';

/**
 * @module useCalculator
 * @description Хук useCalculator.</br>
 * Содержит логику калькулятора. Возвращает значение, которое отображается
 *  на дисплее калькулятора, и методы - обработчики нажатия на кнопки калькулятора.
 * @since v.1.0.0
 * @returns {object}
 */
const useCalculator = () => {
  const [value, setValue] = useState('0');
  const [memoPlusValue, setMemoPlusValue] = useState(0);
  const [memoMinusValue, setMemoMinusValue] = useState(0);
  const [isMemoPlusEmpty, setIsMemoPlusEmpty] = useState(true);
  const [isMemoMinusEmpty, setIsMemoMinusEmpty] = useState(true);
  const [isRadValue, setIsRadValue] = useState(false);
  /**
   * @method handleChangeValue
   * @description Обработчик изменения значения, выводимого на дисплей калькулятора.
   * @since v.1.0.0
   * @public
   * @returns {void}
   */
  const handleChangeValue = useCallback(
    (newValue) => {
      if (value === '0' || !value) {
        setValue(newValue);
      } else {
        setValue(value + newValue);
      }
      document.activeElement.blur();
    },
    [value],
  );

  /**
   * @method handleComputeResult
   * @description Обработчик нажатия на клавишу "равно", вычисляет введенное выражение
   *  и выводит его на дисплей. Если в процессе выичсления происходит "деление на нуль",
   *  на дисплей выводится сообщение об ошибке.
   * @since v.1.0.0
   * @public
   * @returns {void}
   */
  const handleComputeResult = useCallback(() => {
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
      }, 1100);
    }
  }, [value]);

  /**
   * @method handleResetValue
   * @description Обработчик нажатия на кнопку очистки дисплея.</br>
   * Сбрасывает значение на дисплее на 0.
   * @since v.1.0.0
   * @public
   * @returns {void}
   */
  const handleResetValue = useCallback(() => {
    setValue('0');
    setIsRadValue(false);
  }, []);

  /**
   * @method handleBackspaceClick
   * @description Обработчик нажатия на клавишу Backspace.</br>
   * Удаляет последний введенный символ на дисплее.
   * @since v.1.0.0
   * @public
   * @returns {void}
   */
  const handleBackspaceClick = useCallback(() => {
    if (value.length > 1) {
      setValue(value.slice(0, value.length - 1));
    } else {
      setValue('0');
    }
  }, [value]);

  /**
   * @method handleScreenKeyboardInput
   * @description Обработчик ввода с кнопок калькулятора на экране
   * @since v.1.1.0
   * @public
   * @returns {void}
   */
  const handleScreenKeyboardInput = useCallback((evt) => handleChangeValue(evt.target.value), [
    handleChangeValue,
  ]);

  /**
   * @method handleKeyboardInput
   * @description Обработчик ввода с клавиатуры
   * @since v.1.1.0
   * @public
   * @returns {void}
   */
  const handleKeyboardInput = useCallback(
    (evt) => {
      const keyboardKeys = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '+',
        '-',
        '*',
        '/',
        '.',
      ];
      if (keyboardKeys.includes(evt.key)) {
        handleChangeValue(evt.key);
      } else if (evt.key === 'Escape') {
        handleResetValue();
      } else if (evt.key === 'Enter' || '=') {
        handleComputeResult();
      }
      if (evt.key === 'Backspace') {
        handleBackspaceClick();
      }
    },
    [handleChangeValue, handleResetValue, handleComputeResult, handleBackspaceClick],
  );

  /**
   * @method handleErrors
   * @description Обработчик ошибок при выполнении математических действий.</br>
   *  Принимает аргументом коллбэк action, который выполняет определенное действие.
   *  Если в результате выполнения этого действия не произошло ошибок вычисления, результат
   *  выводится на дисплей калькулятора. Если происходит ошибка вычисления, на дисплей
   *  выводится сообщение об ошибке.
   * @param {function} action - коллбэк, выполняет определенное действие с введенным значением.
   * @since v.1.0.0
   * @public
   * @returns {void}
   */
  const handleErrors = useCallback(
    (action) => {
      try {
        const result = action(+value);
        if (isNaN(result)) {
          throw Error();
        } else {
          setValue(result.toString());
          setIsRadValue(true);
        }
      } catch {
        const prevValue = value;
        setValue('Ошибка!');
        setTimeout(() => {
          setValue(prevValue);
        }, 1100);
      }
    },
    [value],
  );

  /**
   * @method handleMemoPlusClick
   * @description Обработчик нажатия на клавишу M+.</br>
   * Проверяет корректность значения на дисплее и сохраняет его в память, если
   *  сохраняемое значение является числом.
   * @since v.1.0.0
   * @public
   * @returns {void}
   */
  const handleMemoPlusClick = useCallback(() => {
    try {
      if (isNaN(+value)) {
        throw Error();
      } else {
        const newValue = memoPlusValue + +value;
        setMemoPlusValue(newValue);
        setIsMemoPlusEmpty(false);
      }
    } catch {
      const prevValue = value;
      setValue('Ошибка!');
      setTimeout(() => {
        setValue(prevValue);
      }, 1100);
    }
  }, [value, memoPlusValue]);

  /**
   * @method handleMemoMinusClick
   * @description Обработчик нажатия на клавишу M-.</br>
   * Проверяет корректность значения на дисплее и сохраняет его в память, если
   *  сохраняемое значение является числом.
   * @since v.1.0.0
   * @public
   * @returns {void}
   */
  const handleMemoMinusClick = useCallback(() => {
    try {
      if (isNaN(+value)) {
        throw Error();
      } else {
        const newValue = memoMinusValue + +value;
        setMemoMinusValue(newValue);
        setIsMemoMinusEmpty(false);
      }
    } catch {
      const prevValue = value;
      setValue('Ошибка!');
      setTimeout(() => {
        setValue(prevValue);
      }, 1100);
    }
  }, [value, memoMinusValue]);

  /**
   * @method handleMemoResultClick
   * @description Обработчик нажатия на кнопку MR.</br>
   * Вычисляет разницу между значениями, сохраненными в ячейках памяти, и выводит
   *  результат на дисплей.
   * @since v.1.0.0
   * @public
   * @returns {void}
   */
  const handleMemoResultClick = useCallback(() => {
    const memoResultValue = memoPlusValue - memoMinusValue;
    setValue(memoResultValue.toString());
  }, [memoPlusValue, memoMinusValue]);

  /**
   * @method handleMemoClearClick
   * @description Обработчик нажатия на кнопку MC.</br>
   * Очищает ячейки памяти от сохраненных в них значений.
   * @since v.1.0.0
   * @public
   * @returns {void}
   */
  const handleMemoClearClick = useCallback(() => {
    setMemoPlusValue(0);
    setMemoMinusValue(0);
    setIsMemoPlusEmpty(true);
    setIsMemoMinusEmpty(true);
  }, []);

  /**
   * @method handleComputeSin
   * @description Обработчик нажатия на кнопку sin.</br>
   * Вычисляет значение синуса в радианах и выводит результат на дисплей.
   *  Если в процессе вычисления происходит ошибка, на дсиплей выводится сообщение об ошибке.
   * @since v.1.0.0
   * @public
   * @returns {void}
   */
  const handleComputeSin = useCallback(() => {
    handleErrors(Math.sin);
  }, [handleErrors]);

  /**
   * @method handleComputeCos
   * @description Обработчик нажатия на кнопку cos.</br>
   * Вычисляет значение косинуса в радианах и выводит результат на дисплей.
   *  Если в процессе вычисления происходит ошибка, на дсиплей выводится сообщение об ошибке.
   * @since v.1.0.0
   * @public
   * @returns {void}
   */
  const handleComputeCos = useCallback(() => {
    handleErrors(Math.cos);
  }, [handleErrors]);

  /**
   * @method handleComputeTg
   * @description Обработчик нажатия на кнопку tg.</br>
   * Вычисляет значение тангенса в радианах и выводит результат на дисплей.
   *  Если в процессе вычисления происходит ошибка, на дсиплей выводится сообщение об ошибке.
   * @since v.1.0.0
   * @public
   * @returns {void}
   */
  const handleComputeTg = useCallback(() => {
    handleErrors(Math.tan);
  }, [handleErrors]);

  /**
   * @method handleComputeCtg
   * @description Обработчик нажатия на кнопку ctg.</br>
   * Вычисляет значение котангенса в радианах и выводит результат на дисплей.
   *  Если в процессе вычисления происходит ошибка, на дсиплей выводится сообщение об ошибке.
   * @since v.1.0.0
   * @public
   * @returns {void}
   */
  const handleComputeCtg = useCallback(() => {
    handleErrors((a) => 1 / Math.tan(a));
  }, [handleErrors]);

  /**
   * @method handleComputeSqrt
   * @description Обработчик нажатия на кнопку "квадратный корень".</br>
   * Вычисляет квадратный корень введенного значения и выводит результат на дисплей.
   *  Если в процессе вычисления происходит ошибка, на дсиплей выводится сообщение об ошибке.
   * @since v.1.0.0
   * @public
   * @returns {void}
   */
  const handleComputeSqrt = useCallback(() => {
    handleErrors(Math.sqrt);
  }, [handleErrors]);

  return {
    value,
    handleScreenKeyboardInput,
    handleKeyboardInput,
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
  };
};
export { useCalculator };
