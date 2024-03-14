import React from 'react';
import StudentInfo from './StudentInfo';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';



function StudentsPage(): JSX.Element {

const students = useSelector((store: RootState)=> store.students.students)
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

export default StudentsPage;
