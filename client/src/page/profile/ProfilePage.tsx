import React from 'react';
import './ProfilePage.css';
import FormAddStudent from './FormAddStudent';

type ProfilePageProps = {};

export const ProfilePage = ({}: ProfilePageProps): JSX.Element => {
  return (
    <div className="ProfilePage">
      <h3>Добавить студента</h3>
      <FormAddStudent />
    </div>
  );
};

export default ProfilePage;
