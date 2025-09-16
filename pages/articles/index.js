import React from 'react'
// import styles from "./index.module.css"
// console.log("styles: ", styles);

function Articles() {
  // let { textColor, title } = styles

  return (
    <>
      <div className="title ">
        <h1 className='text-indigo-400 md:text-rose-500 border-4 ring-8 ring-amber-400 ' >Articles - index.js</h1>
        
      </div>

      <style jsx>
        {`
         
          .title{
            background: purple;
          }
      `}
      </style>

    </>

  )
}

export default Articles

