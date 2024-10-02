import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Api from '../../Api/Api';

const AddCourse = () => {
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [subjectId, setSubjectId] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [courses, setCourses] = useState([]);
  const [editingCourseId, setEditingCourseId] = useState(null);
  const [showAddCourse, setShowAddCourse] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await Api.get('/Admin/GetAllcourses');
      if (Array.isArray(response.data)) {
        setCourses(response.data);
      } else {
        setCourses([]);
      }
    } catch (err) {
      console.error('Failed to fetch courses', err);
      setCourses([]);
    }
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      if (editingCourseId) {
        // Edit existing course
        const response = await Api.put(`Admin/courses/${editingCourseId}`, {
          courseId,
          courseName,
          courseDescription,
          subjectId,
          amount,
        });
        if (response.status === 200) {
          setMessage('Course updated successfully.');
        }
      } else {
        // Add new course
        const response = await Api.post('Admin/upload-course', {
          courseId,
          courseName,
          courseDescription,
          subjectId,
          amount,
        });
        if (response.status === 201) {
          alert("Course added successfully.")
          setMessage('Course added successfully.');
        }
      }
      fetchCourses();
      resetForm();
    } catch (error) {
      setMessage(
        error.response ? error.response.data.message : 'Error uploading course'
      );
    }
  };

  const handleEdit = (course) => {
    setCourseId(course.courseId);
    setCourseName(course.courseName);
    setCourseDescription(course.courseDescription);
    setSubjectId(course.subjectId);
    setAmount(course.amount);
    setEditingCourseId(course._id);
    setShowAddCourse(true);
  };

  const handleDelete = async (courseId) => {
    try {
     const response =  await Api.delete(`Admin/courses/${courseId}`);
     if (response.status === 200) {
      alert("Course Delete successfully.")
      fetchCourses();
     }
      
    } catch (err) {
      console.error('Failed to delete course', err);
    }
  };

  const resetForm = () => {
    setCourseId('');
    setCourseName('');
    setCourseDescription('');
    setSubjectId('');
    setAmount('');
    setEditingCourseId(null);
    setShowAddCourse(false);
  };

  return (
    <AddCourseContainer>
      <Title>
        <span>Course Management</span>
        <ToggleAddButton onClick={() => setShowAddCourse(!showAddCourse)}>
          {showAddCourse ? 'Close' : 'Add Course'} +
        </ToggleAddButton>
      </Title>

      {showAddCourse && (
        <Form onSubmit={handleSubmit}>
          {message && <Message>{message}</Message>}
          <FormGroup>
            <label htmlFor="courseId">Course ID</label>
            <input
              type="text"
              id="courseId"
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="courseName">Course Name</label>
            <input
              type="text"
              id="courseName"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="courseDescription">Course Description</label>
            <textarea
              id="courseDescription"
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
              rows="4"
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="subjectId">Subject ID</label>
            <input
              type="text"
              id="subjectId"
              value={subjectId}
              onChange={(e) => setSubjectId(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="amount">Amount ($)</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              min="0"
              step="0.01"
            />
          </FormGroup>
          <SubmitButton type="submit">{editingCourseId ? 'Update' : 'Add'} Course</SubmitButton>
        </Form>
      )}

      <CourseList>
        <h3>All Courses</h3>
        {Array.isArray(courses) && courses.length > 0 ? (
          courses.map((course) => (
            <CourseItem key={course._id}>
              <CourseInfo>
                <strong>{course.courseName}</strong> - {course.courseDescription}
              </CourseInfo>
              <ButtonGroup>
                <EditButton onClick={() => handleEdit(course)}>Edit</EditButton>
                <DeleteButton onClick={() => handleDelete(course._id)}>Delete</DeleteButton>
              </ButtonGroup>
            </CourseItem>
          ))
        ) : (
          <p>No courses available</p>
        )}
      </CourseList>
    </AddCourseContainer>
  );
};


// Styled Components
const AddCourseContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 24px;
`;

const ToggleAddButton = styled.button`
  padding: 10px 20px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Message = styled.h2`
color: red;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357abd;
  }
`;

const CourseList = styled.div`
  margin-top: 20px;
`;

const CourseItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const CourseInfo = styled.div`
  font-size: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const EditButton = styled.button`
  padding: 8px 12px;
  background-color: #ffc107;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  padding: 8px 12px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default AddCourse;
