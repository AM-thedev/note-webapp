import React, { useEffect } from 'react'
import NoteList from './components/NoteList'
import NoteForm from './components/NoteForm'
import Filter from './components/Filter'
import Notification from './components/Notification'

import { initializeNotes } from './reducers/noteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeNotes())  
  }, [dispatch])

  return (
    <div>
      <h2>Notes</h2>
      <Notification />
      <Filter />
      <NoteList />
      <NoteForm />
    </div>
  )
}

export default App