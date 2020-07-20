import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {Button, Container, Form} from 'semantic-ui-react'

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      redirectTo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit(event) {
    event.preventDefault()
    this.props._login(this.state.username, this.state.password)
    this.setState({
      redirectTo: '/'
    })
  }
  
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{pathname: this.state.redirectTo}}/>
    } else {
      return (
        <div className="CustomForm">
          <Container text>
            <h1>Login form</h1>
            <Form>
              <Form.Field>
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Button
                basic={true}
                color={'blue'}
                onClick={this.handleSubmit}
                content={'Login'}
                disabled={this.state.username.length === 0 || this.state.password.length === 0}
              />
            </Form>
          </Container>
        </div>
      )
    }
  }
}

export default LoginForm
