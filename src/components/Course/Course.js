import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Course.css";

const Course = (props) => {
  

  const { name, img, lesson, duration, fee } = props.course;

  return (
    <div className="card-two">
      <Col>
        <Card>
          <Card.Img variant="top" className="img-two" src={img} />
          <Card.Body>
            <Card.Title>Course-Name: {name}</Card.Title>
            <Card.Text>Lesson: {lesson}</Card.Text>
            <Card.Text>Duration: {duration}</Card.Text>
            <Card.Text>Fee: {fee}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Course;
