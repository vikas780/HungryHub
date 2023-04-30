import React from 'react'

const CardShimmer = () => {
  return (
    <div className='shimmer-card'>
      <div className='shimmer-img stroke animate'></div>
      <div className='shimmer-title stroke animate'></div>
      <div className='shimmer-tags stroke animate '></div>
      <div className='shimmer-details stroke animate '></div>
    </div>
  )
}

export default function Shimmer() {
  return (
    <div className='shimmer-container'>
      {new Array(8).fill(0).map((element, index) => {
        return <CardShimmer key={index} />
      })}
    </div>
  )
}
