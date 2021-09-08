import React from "react"
import cn from "classnames"
import styles from "./displayCalc.module.css"

const DisplayCalc = ({ calc }) => {
  return (
    <>
      <div className={cn(styles.display)}> {calc || "0"} </div>
    </>
  )
}

export default DisplayCalc
