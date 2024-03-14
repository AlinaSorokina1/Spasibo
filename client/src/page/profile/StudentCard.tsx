import React from 'react';
import { Student } from './typeStudent';

type StudentCardProps = {
  student: Student;
};

export const StudentCard = ({ student }: StudentCardProps): JSX.Element => {
  return (
    <div className="StudentCard">
      <h3>{student.name}</h3>
      <h3>{student.phase}</h3>
      <h3>{student.countThanks}</h3>
      <button>Изменить</button>
      <button>Удалить</button>
    </div>
  );
};

export default StudentCard;
