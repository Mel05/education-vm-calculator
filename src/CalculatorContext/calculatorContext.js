import React, { useContext } from "react"

const CalculatorContext = React.createContext()

export const useCalculator = () => {
  return useContext(CalculatorContext)
}

export const CalculatorContextProvider = ({ children }) => {
  return <CalculatorContext.Provider>{children}</CalculatorContext.Provider>
}
