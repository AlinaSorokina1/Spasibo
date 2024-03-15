import React, { useEffect, useState } from 'react';
import './ProfilePage.css';
import { useDispatch } from 'react-redux';
import FormAddStudent from './FormAddStudent';
import StudentList from './StudentList';
import type { Student } from './typeStudent';
import ModalWindow from '../../ui/modal/ModalPage';

export function ProfilePage(): JSX.Element {
  const dispatch = useDispatch();
  const [isOpenRibak, onCloseRibak] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      onCloseRibak(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
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
      <ModalWindow isOpen={isOpenRibak} onClose={onCloseRibak}>
        <h1 id="ad-modal-title">Горячие рыбаки в вашем городе</h1>
        <img
          src="https://ca.slack-edge.com/T04V5DDHUN8-U04V306UPFU-fd6bea915107-512"
          width={250}
          height={250}
        />
        <button type="button" onClick={() => onCloseRibak((prev) => !prev)}>
          Смотреть
        </button>
        <button type="button" onClick={() => onCloseRibak((prev) => !prev)}>
          Закрыть
        </button>
      </ModalWindow>
      <FormAddStudent />
      <StudentList />
    </div>
  );
}

export default ProfilePage;
