/* eslint-disable react/button-has-type */
import React from 'react';
import type { Student } from '../../app/type/student';
import { useDispatch } from 'react-redux';

type StudentInfoProps = {
  student: Student;
};

export function StudentInfo({ student }: StudentInfoProps): JSX.Element {
const dispatch = useDispatch();

const plusCount = async (id: number): Promise<void> => {
  const data = await (await fetch(`/api/students/${id}/update`), {
    method: 'PUT',
    headers: {
      ''
    }
  })
}


  return (
    <div className="StudentInfo">
      <h2>{student.name}</h2>
      <h2>Phase: {student.phase}</h2>
      <h2>Spasibo: {student.countThanks}</h2>
      <button>+</button>
      <button>-</button>
    </div>
  );
}

export default StudentInfo;
