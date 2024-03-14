import React, { useState } from 'react';

export const FormAddStudent = (): JSX.Element => {
  const [name, setName] = useState('');
  const [phase, setPhase] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data: { message: string } = await (
      await fetch('/api/students', {
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
      alert('ok');
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
