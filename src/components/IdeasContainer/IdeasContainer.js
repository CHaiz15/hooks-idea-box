import React from 'react'
import './IdeasContainer.css'
import IdeasCard from '../IdeasCard/IdeasCard'

export const IdeasContainer = ({ideas, deleteIdea}) => {
  const allIdeas = ideas.map(idea => {
    return <IdeasCard key={idea.id} idea={idea} deleteIdea={deleteIdea}/>
  })
  return (
    <div>
      {allIdeas}
    </div>
  )
}

export default IdeasContainer
