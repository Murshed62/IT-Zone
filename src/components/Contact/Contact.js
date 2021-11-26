import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
  return (
    <div>
    <div className='input-container'>
    <>
  <InputGroup className="mb-2">
    <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
    <FormControl
      placeholder="Fullname"
      aria-label="Fullname"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Enter your email"
      aria-label="Enter your email"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
  </InputGroup>

  {/* <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label> */}
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon3">
      Address
    </InputGroup.Text>
    <FormControl id="basic-url" aria-describedby="basic-addon3" />
  </InputGroup>

  <InputGroup className="mb-3">
  <InputGroup.Text>Zip Code</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" />
   
  </InputGroup>

</>
    </div>
<button className='send-btn'>Send</button>
    </div>
  );
};

export default Contact;