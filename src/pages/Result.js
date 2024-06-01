import React from 'react'

const Result = ({score, total}) => {
  return (
    <div className="container text-center">
        <h2>Your Marks : {score}</h2>
        <h2>Total Marks : {total}</h2>

    </div>
  )
}

export default Result