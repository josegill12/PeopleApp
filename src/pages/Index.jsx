import React from 'react'
import { useLoaderData,  Link, Form } from 'react-router-dom'


const Index = () => {
const people = useLoaderData();
console.log(people, "from index.jsx");
return (
    <div>
      <h2>Create a Person</h2>
      <Form action="/create" method="post">
        <input type="input" name="name" placeholder="person's name" />
        <input type="input" name="image" placeholder="person's picture" />
        <input type="input" name="title" placeholder="person's title" />
        <input type="submit" value="create person" />
      </Form>

      <h2>People</h2>
      {people.map(person => { 
      return (
        <div key={person._id} className="person">
          <Link to={`/${person._id}`}>
            <h1>{person.name}</h1>
          </Link>
          <img src={person.image} alt={person.name} />
          <h3>{person.title}</h3>
          <Form action={`/delete/${person._id}`} method= "POST">
            <button type="submit" className='round-full bg-red-500'>
              Delete Me
            </button>
          </Form>
          <Link to={`${person._id}/edit`}>
            <button className='round-full bg-green-500'>
              Edit {person.name}
            </button>
          </Link>
        </div>
      );
      })}
    </div>
  );
}


export default Index