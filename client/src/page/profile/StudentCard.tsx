import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import type { Student } from './typeStudent';
import ModalWindow from '../../ui/modal/ModalPage';
import FormStudentUpdate from './FormStudentUpdate';

type StudentCardProps = {
  student: Student;
};

export function StudentCard({ student }: StudentCardProps): JSX.Element {
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
      <div className='studentsName'>
      <h3>{student.name}</h3>
      <h3>{`Фаза: ${student.phase}`}</h3>
      </div>
      {/* <h3>{student.countThanks}</h3> */}
      <div className='btn-container'>
      <button className="btn-update" type="button" onClick={() => onCloseUpdate((prev) => !prev)}>
        <i className="fa fa-pencil" />
      </button>
      <ModalWindow isOpen={isOpenUpdate} onClose={onCloseUpdate}>
        <FormStudentUpdate student={student} onClose={onCloseUpdate} />
        <button type="button" onClick={() => onCloseUpdate((prev) => !prev)}>
          Отмена
        </button>
      </ModalWindow>
      <button className="btn-delete" type="button" onClick={() => onClose((prev) => !prev)}>
        <i className="fa fa-trash" aria-hidden="true" />
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
    </div>
  );
}

export default StudentCard;
