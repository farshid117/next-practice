import React from 'react'
import styles from "./index.module.css"
console.log("styles: ", styles);

function Articles() {
    let {textColor, title } = styles
   
  return (
      <div className={title}>
          <h1>Articles - index.js</h1>
    </div>
  )
}

export default Articles