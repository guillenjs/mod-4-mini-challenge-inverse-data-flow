import React from 'react'

class NewSpice extends React.Component {
  state = {
    title: "",
    image: "",
    notes: "",
    description: "",
  }

  handleChange = evt => {
    evt.preventDefault()
    // this.props.addNewSpice()
    this.setState({
      [evt.target.name]: evt.target.value
    },()=>{console.log(this.state)})
  }

  handleSubmit =(e)=> {
    e.preventDefault()
    this.props.addNewSpice(this.state)
  }

  render() {
    return (
      <div className="card">
        <h2>New Spice</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
          <label htmlFor="image">Image URL: </label>
          <input type="text" name="image" value={this.state.image} onChange={this.handleChange}/>
          <label htmlFor="notes">Tasting Notes: </label>
          <input type="text" name="notes" value={this.state.notes} onChange={this.handleChange}/>
          <label htmlFor="notes">Description: </label>
          <textarea type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewSpice