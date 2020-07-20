import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {Button, Container, Form} from 'semantic-ui-react'

class SignupForm extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
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
    const {username, password, confirmPassword} = this.state
    event.preventDefault()
    if (username && username.length > 0 && password && password.length > 0 && confirmPassword && confirmPassword.length > 0) {
      axios
      .post('/auth/signup', {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        if (!response.data.errmsg) {
          this.setState({
            redirectTo: '/login'
          })
        } else {
          console.log(response.data.errmsg)
        }
      })
    }
  }
  
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{pathname: this.state.redirectTo}}/>
    }
    return (
      <div className="CustomForm">
        <Container text>
          <h1>Signup form</h1>
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
            <Form.Field>
              <label htmlFor="confirmPassword">Confirm Password: </label>
              <input
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Button
              basic={true}
              color={'blue'}
              onClick={this.handleSubmit}
              content={'Sign Up'}
              disabled={this.state.username.length === 0 || this.state.password.length === 0 ||
              this.state.confirmPassword.length === 0}
            />
          </Form>
        </Container>
      </div>
    )
  }
}

export default SignupForm
