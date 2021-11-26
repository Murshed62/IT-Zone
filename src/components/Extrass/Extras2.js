import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Services = (props) => {
  const {img, trainer, Age, Section, Experience, description} = props.services;

  return (
    <div className="card-two">
      <Col>
        <Card>
          <Card.Img variant="top" className="img-two" src={img} />
          <Card.Body>
            <Card.Title><span>Trainer</span> : {trainer}</Card.Title>
            <Card.Text><span className='fw-bold'>Age</span> : {Age}</Card.Text>
            <Card.Text><span className='fw-bold'>Section</span> : {Section}</Card.Text>
            <Card.Text><span className='fw-bold'>Experience</span> : {Experience}</Card.Text>
            <Card.Text><span className='fw-bold'>Description</span> : {description}</Card.Text>
            <button className='bg-warning ms-3'>Details</button>
          </Card.Body>
        </Card>
      </Col>
      
    </div>
  );
};

export default Services;