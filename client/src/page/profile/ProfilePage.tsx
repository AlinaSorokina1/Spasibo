import React, { useEffect } from 'react';
import './ProfilePage.css';
import FormAddStudent from './FormAddStudent';
import StudentList from './StudentList';
import { useDispatch } from 'react-redux';
import { Student } from './typeStudent';

export const ProfilePage = (): JSX.Element => {
const dispatch = useDispatch()
   const profileLoadStudents = async (): Promise<void> => {
      const data: { students: Student[] } = await (await fetch(`/api/students/`)).json();
      dispatch({ type: 'students/load', payload: data.students });
    };
useEffect(()=>{
   profileLoadStudents()
}, [])
  return (
    <div className="ProfilePage">
      <h3>Добавить студента</h3>
      <FormAddStudent />
      <StudentList />
    </div>
  );
};

export default ProfilePage;
