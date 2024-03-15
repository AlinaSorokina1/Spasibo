import React, { SetStateAction, useState } from 'react';
import { Student } from './typeStudent';
import { useDispatch } from 'react-redux';

type FormStudentUpdateProps = {
  student: Student;
  onClose: (value: SetStateAction<boolean>) => void;
};

export const FormStudentUpdate = ({ student, onClose }: FormStudentUpdateProps): JSX.Element => {
  const [name, setName] = useState(student.name);
  const [phase, setPhase] = useState(student.phase);
  const [countThanks, setCountThanks] = useState(student.countThanks);
  const dispatch = useDispatch();

  const updateItem = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const data = await (
      await fetch(`/api/profile/${student.id}/update`, {
        method: 'put',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ name, phase, countThanks }),
      })
    ).json();

    if (data.message === 'success') {
      dispatch({ type: 'student/update', payload: data.student });
      onClose((prev) => !prev);
    }
  };

  return (
    <div className="FormStudentUpdate">
      <form onSubmit={updateItem}>
        <input
          type="text"
          placeholder="ФИО"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="ФИО"
          value={phase}
          onChange={(e) => setPhase(+e.target.value)}
        />
        <input
          type="text"
          placeholder="ФИО"
          value={countThanks}
          onChange={(e) => setCountThanks(+e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormStudentUpdate;
