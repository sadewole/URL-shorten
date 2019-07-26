import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';

import './appContent.css';
import FooterForm from '../FooterForm';

export class AppContent extends Component {
  render() {
    return (
      <div>
        <Container className='content text-white'>
          <div className='text-content'>
            <h1>Link that mean business</h1>
            <p>Create and share trusted, powerful short links</p>
            <Button color='primary'>Sign up for free</Button>
          </div>
          <FooterForm />
        </Container>
      </div>
    );
  }
}

export default AppContent;
