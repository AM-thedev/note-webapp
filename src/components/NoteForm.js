import React from 'react'
import { connect } from 'react-redux'
import { createNote } from '../reducers/noteReducer'
import { displayNotification } from '../reducers/notificationReducer'


const NoteForm = (props) => {

  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    props.createNote(content)

    props.displayNotification(`New note added: "${content}"`, 5)
  }

  return (
    <div>
      <h2>create new</h2>
        <form onSubmit={addNote}>
          <input name="note" />
          <button type="submit">add</button>
        </form>
    </div>
  )
}

export default connect(
  null,
  { createNote, displayNotification }
)(NoteForm)