import React from 'react'
import Link from "next/link";

function Course({id, shortName, title}) {
  return (
      <li key={id}>
          <Link href={`/courses/${shortName}`}>{title}</Link>
      </li>
  )
}

export default Course