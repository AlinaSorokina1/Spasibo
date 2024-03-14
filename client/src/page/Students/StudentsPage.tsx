import React, { useState } from 'react';
import type { Student } from '../../app/type/student';
import StudentInfo from './StudentInfo';

type StudentsProps = {
  students: Student[];
};

function MainPage({ students }: StudentsProps): JSX.Element {
  // const [student, setStudent] = useState([]);

  return (
    <div className="MainPage">
      <div className="btns">
        <button>1 ФАЗА</button>
        <button>2 ФАЗА</button>
        <button>3 ФАЗА</button>
      </div>
      <form>
        <input type="text" placeholder="Начните вводить имя" />
        <button>Найти</button>
      </form>
      <div className="students-container">
        {students.map((student) => (
          <StudentInfo student={student} />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
