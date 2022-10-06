import React from 'react'
import { SpinnerCircular } from "spinners-react";

export default function Loader() {
  return (
    <div >
    <SpinnerCircular
      size={120}
      thickness={180}
      speed={100}
      color="blue"
      secondaryColor="rgb(230, 247, 255)"
    />
    <p>Loading</p>
  </div>
  )
}
