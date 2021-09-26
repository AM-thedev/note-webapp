import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/noteReducer'
import { displayNotification } from '../reducers/notificationReducer'


const NoteList = (props) => {
  
  const notesToShow = () => {
    return props.notes.filter(
      note => note.content.toLowerCase().includes(
        props.filter.toLowerCase()
      )
    )
  }

  const vote = (note) => {
    console.log('vote', note.id)
    props.addVote(note.id)
    props.displayNotification(`You voted for: "${note.content}"`, 5)
  }

  return (
    <div>
      {notesToShow().map(note =>
        <div key={note.id}>
          <div>
            {note.content}
          </div>
          <div>
            has {note.votes} <button 
              onClick={() => vote(note)}>
              vote
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const mapDispatchToProps = {
  addVote,
  displayNotification
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    filter: state.filter
  }
}

const ConnectedNotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList)
export default ConnectedNotes