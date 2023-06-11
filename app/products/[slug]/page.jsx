import React from 'react'

const page = ({params}) => {
  return (
    <div>Product details {params.slug}</div>
  )
}

export default page