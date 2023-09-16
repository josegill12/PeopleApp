import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Show = () => {
  const people = useLoaderData();
  return (
    <div>
      <h1>{people.name}</h1>
      <img src={people.image} alt={people.name} />
      <h2>{people.title}</h2>
      </div>
  )
}

export default Show