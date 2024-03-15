import React from 'react';
import './ProfilePage.css';
import FormAddStudent from './FormAddStudent';
import StudentList from './StudentList';
import Footer from '../../ui/footer/Footer';

export const ProfilePage = (): JSX.Element => {
  return (
    <div className="ProfilePage">
      <h3>Добавить студента</h3>
      <FormAddStudent />
      <StudentList />
      <Footer />
    </div>
  );
};

export default ProfilePage;
