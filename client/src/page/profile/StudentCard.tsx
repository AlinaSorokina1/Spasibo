import React, { useState } from 'react';
import { Student } from './typeStudent';
import ModalWindow from '../../ui/modal/ModalPage';
import { useDispatch } from 'react-redux';
import FormStudentUpdate from './FormStudentUpdate';

type StudentCardProps = {
  student: Student;
};

export const StudentCard = ({ student }: StudentCardProps): JSX.Element => {
  const [isOpen, onClose] = useState(false);
  const [isOpenUpdate, onCloseUpdate] = useState(false);
  const dispatch = useDispatch();
  const deleteItem = async (id: number) => {
    const data = await (await fetch(`/api/profile/${id}/delete`, { method: 'DELETE' })).json();

    if (data.message === 'success') {
      dispatch({ type: 'students/remove', payload: id });
      onClose((prev) => !prev);
    }
  };
  return (
    <div className="StudentCard">
      <h3>{student.name}</h3>
      <h3>{student.phase}</h3>
      <h3>{student.countThanks}</h3>
      <button type="button" onClick={() => onCloseUpdate((prev) => !prev)}>
        Изменить
      </button>
      <ModalWindow isOpen={isOpenUpdate} onClose={onCloseUpdate}>
        <FormStudentUpdate student={student} onClose={onCloseUpdate} />
        <button type="button" onClick={() => onCloseUpdate((prev) => !prev)}>
          Отмена
        </button>
      </ModalWindow>
      <button type="button" onClick={() => onClose((prev) => !prev)}>
        Удалить
      </button>
      <ModalWindow isOpen={isOpen} onClose={onClose}>
        <button type="button" onClick={() => deleteItem(student.id)}>
          Удалить
        </button>
        <button type="button" onClick={() => onClose((prev) => !prev)}>
          Отмена
        </button>
      </ModalWindow>
    </div>
  );
};

export default StudentCard;
