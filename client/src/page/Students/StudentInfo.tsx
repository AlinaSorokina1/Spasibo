/* eslint-disable react/button-has-type */
import React from 'react';
import type { Student } from '../../app/type/student';

type StudentInfoProps = {
  student: Student;
};

export function StudentInfo({ student }: StudentInfoProps): JSX.Element {
  return (
    <div className="StudentInfo">
      <h2>
        {student.name}
      </h2>
      <h2>

        Phase: {student.phase}

      </h2>
      <h2>
      Spasibo: {student.countThanks}
      </h2> 
      <button>+</button>
      <button>-</button>
    </div>
  );
}

export default StudentInfo;
