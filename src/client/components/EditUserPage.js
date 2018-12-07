import React from 'react';
import { connect } from 'react-redux';
import { editUser } from '../actions/users'; // action generator
import UserForm from './UserForm';
import {Grid, Row, Col} from 'react-bootstrap';

const EditUserPage = (props) => (
  <Grid>
    <Row>
      <Col xs={12} sm={10}>
        <h1>Edit User Page</h1>
        <UserForm 
          user={props.user}
          onSubmit={(user) => {
          props.dispatch(editUser(props.match.params.id, user));
          props.history.push('/');
        }}/>      
      </Col>
    </Row>
  </Grid>
);
const mapStateToProps = (state, props) => {
  return {
    user: state.users.find((user) => user.id === props.match.params.id)
  };
};
export default connect(mapStateToProps)(EditUserPage);
