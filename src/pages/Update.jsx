import React, {useState} from 'react'
import { useLoaderData, Form } from 'react-router-dom'

const Update = () => {
const people = useLoaderData();
const [formData, setFormData] = useState(people);

const handleChange = (e) => {
    setFormData(prevState => {
        return {...prevState, [e.target.name]: e.target.value}
    })
}
  return (
    <div><Form action={`/update/${people._id}` }method="post">
    <input type="text" name="name"  value={formData.name}  onChange={handleChange} placeholder="person's name" />
    <input type="input" name="image" value={formData.image} onChange={handleChange} placeholder="person's picture" />
    <input type="input" name="title" value={formData.title} onChange={handleChange} placeholder="person's title" />
    <input className="rounded-full p-3 bg-yellow-300" type="submit" value={`update ${people.name}`} />
  </Form></div>
  )
}

export default Update