import React from 'react'

export default function Loading() {
  return (
    <div className="d-flex justify-content-center loading">
    <div className="spinner-border " style={{width:"3rem",height:"3rem"}} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  )
}
