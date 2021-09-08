import React, { useState } from "react"
import cn from "classnames"
import styles from "./app.module.css"
import DisplayCalc from "../DisplayCalc/displayCalc"
import ButtonsForm from "../ButtonsForm/buttonsForm"
import { CalculatorContextProvider } from "../CalculatorContext/calculatorContext"

function App() {
  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")

  return (
    <CalculatorContextProvider>
      <div className={cn("container", styles.calculator__form)}>
        <h1 className={cn(styles.title)}> Calculator! </h1>
        <div>
          <DisplayCalc calc={calc} />
          <ButtonsForm
            calc={calc}
            result={result}
            setCalc={setCalc}
            setResult={setResult}
          />
        </div>
      </div>
    </CalculatorContextProvider>
  )
}

export default App
