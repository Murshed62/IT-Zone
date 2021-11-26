import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Service.css'


const Home = () => {
  const [alls, setAlls] = useState ([]);
  useEffect(()=>{
    fetch("./Education.JSON")
    .then(res=>res.json())
    .then(data=>setAlls(data))
  },[])
  return (
    <div>
      
      <Row xs={1} md={4} className="g-4">
{
  alls.map(course=><Course
  key={course.id}
  course={course}
  ></Course>)
}
</Row>


    </div>
  );
};

export default Home;