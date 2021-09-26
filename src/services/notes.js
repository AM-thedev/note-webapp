import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const addVote = async (id) => {
  const { data: votedNote } = await axios.get(`${baseUrl}/${id}`)
  const object = { ...votedNote, votes: votedNote.votes +1 }
  const response = await axios.put(`${baseUrl}/${id}`, object)
  return response.data
}

export default {
  getAll,
  createNew,
  addVote
}