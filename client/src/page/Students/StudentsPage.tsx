import React from 'react';
import { useSelector } from 'react-redux';
import StudentInfo from './StudentInfo';
import type { RootState } from '../../redux/store';

function StudentsPage(): JSX.Element {
  const students = useSelector((store: RootState) => store.students.students);
  return (
    <div className="StudentsPage">
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

export default StudentsPage;
