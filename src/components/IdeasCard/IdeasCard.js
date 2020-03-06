import React from 'react';

const IdeaCard = ({idea, deleteIdea}) => {
  const removeIdea = () => {
    deleteIdea(idea.id)
  }
  return (
    <div>
      <h2>{idea.title}</h2>
      <p>{idea.description}</p>
      <button onClick={removeIdea}>Delete Idea</button>
    </div>
  )
}

export default IdeaCard;