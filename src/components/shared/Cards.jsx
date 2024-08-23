import React from 'react'

const Cards = ({children, reverse}) => {
  return (
    <div className={`card ${reverse ? 'reverse' : ""} `}>
     {children}
    </div>
  )
}

export default Cards
