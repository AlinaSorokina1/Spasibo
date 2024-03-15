import React, { useEffect } from 'react';
import './ProfilePage.css';
import { useDispatch } from 'react-redux';
import FormAddStudent from './FormAddStudent';
import StudentList from './StudentList';
import type { Student } from './typeStudent';

export function ProfilePage(): JSX.Element {
  const dispatch = useDispatch();
  const profileLoadStudents = async (): Promise<void> => {
    const data: { students: Student[] } = await (await fetch(`/api/students/`)).json();
    dispatch({ type: 'students/load', payload: data.students });
  };
  useEffect(() => {
    profileLoadStudents();
  }, []);
  return (
    <div className="ProfilePage">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <h3>Добавить студента</h3>
      <FormAddStudent />
      <StudentList />
    </div>
  );
}

export default ProfilePage;
