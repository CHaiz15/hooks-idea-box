import React, { useState } from 'react'
import './App.css'
import Form from '../Form/Form'
import IdeasContainer from '../IdeasContainer/IdeasContainer'

export const App = () => {
  const [ideas, setIdeas] = useState({ideas: []});

  const addIdea = (idea) => {
    setIdeas({ideas: [...ideas.ideas, idea]})
  }
  
  const deleteIdea = (id) => {
    setIdeas({ideas: ideas.ideas.filter(idea => idea.id !== id)})
  }

  return (
    <div className="App">
      <h1>Idea Box</h1>
      <Form addIdea={addIdea}/>
      <IdeasContainer ideas={ideas.ideas} deleteIdea={deleteIdea}/>
    </div>
  )
}

export default App
