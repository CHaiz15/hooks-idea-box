import React, { useState } from 'react'
import './Form.css'

export const Form = ({addIdea}) => {
  const [idea, setIdea] = useState({title: '', description: '', id: Date.now()});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setIdea({...idea, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addIdea(idea)
    setIdea({title: '', description: '', id: Date.now()})
  }

  return (
    <div>
      <form>
        <input
          name='title'
          placeholder='Idea Title...'
          value={idea.title}
          onChange={handleChange}
        /> 
        <input
          name='description'
          placeholder='Idea description...'
          value={idea.description}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Form
