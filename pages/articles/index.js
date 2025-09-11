import React from 'react'
// import styles from "./index.module.css"
// console.log("styles: ", styles);

function Articles() {
  // let { textColor, title } = styles

  return (
    <>
      <div className="title">
        <h1>Articles - index.js</h1>
      </div>

      <style jsx>
        {`
          h1{
            color: red;
          }
          .title{
            background: purple;
          }
      `}
      </style>

    </>

  )
}

export default Articles