import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Student } from './typeStudent';

export const FormAddStudent = (): JSX.Element => {
   const dispatch=useDispatch()
  const [name, setName] = useState('');
  const [phase, setPhase] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data: { message: string , student:Student} = await (
      await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
        },
        body: JSON.stringify({
          name,
          phase,
          countThanks: 0
        }),
      })
    ).json();

    if (data.message === 'success') {
      dispatch({type:'students/add', payload:data.student})
      setName('')
      setPhase('')
    }
  };

  return (
    <div className="FormAddStudent">
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Создать</button>
      </form>
    </div>
  );
};

export default FormAddStudent;
