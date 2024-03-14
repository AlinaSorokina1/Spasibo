import React from 'react';
import './ProfilePage.css';
import FormAddStudent from './FormAddStudent';
import StudentList from './StudentList';

type ProfilePageProps = {};

export const ProfilePage = ({}: ProfilePageProps): JSX.Element => {
  return (
    <div className="ProfilePage">
      <h3>Добавить студента</h3>
      <FormAddStudent />
      <input type="text" placeholder='Тут будет поиск' />
      <StudentList />
    </div>
  );
};

export default ProfilePage;
