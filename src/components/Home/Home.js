import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import Course from "../Course/Course";
import Slider from "../Slider/Slider";

const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./Education.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <Slider></Slider>

      <Row xs={1} md={4} className="g-4">
        {
        courses.slice(0, 4).map((course) => (
          <div key={course.id} className="card-custom">
            <Course course={course}></Course>
          </div>
        ))
        }
      </Row>
    </div>
  );
};

export default Home;
