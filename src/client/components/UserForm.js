import React, {Component} from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap';

export default class UserForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstname: props.user ? props.user.firstname : '',
      lastname: props.user ? props.user.lastname : '',
      email: props.user ? props.user.email : ''
    }
  }
  
  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit = (e) =>{
    e.preventDefault();
    this.props.onSubmit({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email
    });
  }
  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <FormGroup>
            <label>First Name:</label>
            <FormControl 
              type="text"
              name="firstname"
              autoFocus
              value={this.state.firstname}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <label>Last Name:</label>
            <FormControl 
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <label>Email:</label>
            <FormControl 
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange} />
          </FormGroup>                       
          <Button type="submit" bsStyle="primary" className="submitBtn">Submit</Button>
        </form>      
      </div>
    )
  }
}


// <form>
//   <div className="form-group">
//     <label>First Name:</label>
//     <input type="text" className="form-control" name="firstName" value="" />
//   </div>
//   <div className="form-group">
//     <label for="lastName">Last Name:</label>
//     <input type="text" className="form-control" name="lastName" value="" />
//   </div>
//   <button type="submit" className="btn btn-default">Submit</button>
// </form>