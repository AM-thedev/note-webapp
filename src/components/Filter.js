import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import { connect } from 'react-redux'


const Filter = (props) => {

  const handleChange = (event) => {
    const filterInput = event.target.value
    props.filterChange(filterInput)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter: <input onChange={handleChange} />
    </div>
  )
}

export default connect(
  null,
  { filterChange }
)(Filter)