import React from 'react';
import './ProfilePage.css';
import FormAddStudent from './FormAddStudent';
import StudentList from './StudentList';

export const ProfilePage = (): JSX.Element => {
  return (
    <div className="ProfilePage">
      <h3>Добавить студента</h3>
      <FormAddStudent />
      <StudentList />
    </div>
  );
};

export default ProfilePage;
