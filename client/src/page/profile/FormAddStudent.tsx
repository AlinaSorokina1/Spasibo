import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import type { Student } from './typeStudent';
import '../Students/StudentsPage.scss';

export function FormAddStudent(): JSX.Element {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phase, setPhase] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data: { message: string; student: Student } = await (
      await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
        },
        body: JSON.stringify({
          name,
          phase,
          countThanks: 0,
        }),
      })
    ).json();

    if (data.message === 'success') {
      dispatch({ type: 'students/add', payload: data.student });
      setName('');
      setPhase('');
    }
  };

  return (
    <div className="FormAddStudent">
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="ФИО"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Фаза"
            value={phase}
            onChange={(e) => setPhase(e.target.value)}
          />
        </div>
        <button className="btn-add" type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
}

export default FormAddStudent;
