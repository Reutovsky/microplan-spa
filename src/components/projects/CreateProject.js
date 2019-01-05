import React, { Component } from 'react'
import { createProject } from '../../store/actions/projectActions'
import { connect } from 'react-redux'

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state)
    this.props.createProject(this.state)
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create new project</h5>
          <div className="input-field">
            <label htmlFor="title">Project title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project content</label>
            <input type="text" id="content" onChange={this.handleChange} />
          </div>
          <div className="imput-field">
            <button className="btn pink lighten-1 z-depth-0">
              Create
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject)