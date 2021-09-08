import React from "react"
import cn from "classnames"
import styles from "./buttonsForm.module.css"

const ButtonsForm = ({ calc, setCalc, setResult }) => {
  const operation = ["+", "-", "*", "/", "."]
  const updateCalc = (value) => {
    if (
      (operation.includes(value) && calc === "") ||
      (operation.includes(value) && operation.includes(calc.slice(-1)))
    ) {
      return
    }
    setCalc(calc + value)
    if (!operation.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  const deleteLast = () => {
    if (calc === "") {
      return
    }
    const value = calc.slice(0, -1)
    setCalc(value)
  }

  const clearDisplay = () => {
    setCalc("")
  }

  const createDigitsBtn = () => {
    const digitsBtn = []
    for (let i = 9; i >= 0; i--) {
      digitsBtn.push(
        <button
          className={cn(styles.button)}
          onClick={() => updateCalc(i.toString())}
          key={i}
        >
          {i}
        </button>
      )
    }

    return digitsBtn
  }

  const createOperatingBtn = () => {
    const operationBtns = ["+", "-", "*", "/"]
    return operationBtns.map((btn) => (
      <button
        className={cn(styles.button, styles.button__gray)}
        onClick={() => updateCalc(btn)}
        key={btn}
      >
        {btn}
      </button>
    ))
  }

  return (
    <>
      <hr className={cn(styles.white)} />
      <div className={cn(styles.buttons__form)}>
        <div className={cn(styles.operating__btn)}>{createOperatingBtn()}</div>

        <div className={cn(styles.grid2)}>
          <div className={cn(styles.digits__btn)}>
            {createDigitsBtn()}
            <button
              className={cn(styles.button)}
              onClick={() => updateCalc(".")}
            >
              .
            </button>
            <button className={cn(styles.button)} onClick={clearDisplay}>
              AC
            </button>
          </div>

          <div className={cn(styles.grid3)}>
            <button
              className={cn(styles.button, styles.button__gray)}
              onClick={deleteLast}
            >
              >
            </button>
            <button
              className={cn(styles.button, styles.button__blue)}
              onClick={calculate}
            >
              =
            </button>
          </div>
        </div>
      </div>
      <hr className={cn(styles.white)} />
    </>
  )
}

export default ButtonsForm
