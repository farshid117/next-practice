import { useRouter } from 'next/router'
import React from 'react'

function SingleArticle() {
    const route = useRouter()
    console.log("route: ", route.query);

    const {slug = []} = route.query
   
    if (slug.length > 2 ) {
        return (
        <h1>You See{" "} 
            <span className=" text-red-400">{slug[0]}</span> {" "}
            that create at {" "}
            <span className="text-red-400">{slug[1]}/ {slug[2]}/ {slug[3]}</span> {" "} 
            about keyword {" "}
            <span className="text-red-400">{slug[4]}</span>
         </h1>
         )
    }

  return (
      <h1>Single-Article</h1>
  )
}

export default SingleArticle