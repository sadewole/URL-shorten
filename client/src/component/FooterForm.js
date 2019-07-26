import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

export class FooterForm extends Component {
  state = {
    urlLink: ''
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state.urlLink);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className='footerform'>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              type='text'
              name='urlLink'
              id='urlLink'
              onChange={this.handleChange}
              placeholder='Paste the link you want to shorten here.......'
            />
          </FormGroup>{' '}
          <Button> Submit </Button>{' '}
        </Form>{' '}
      </div>
    );
  }
}

export default FooterForm;
