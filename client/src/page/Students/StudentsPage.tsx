import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StudentInfo from './StudentInfo';
import type { RootState } from '../../redux/store';
// import Marks from '../404/404';

function StudentsPage(): JSX.Element {
  const filteredStudent = useSelector((store: RootState) => store.students.filteredStudent);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filterStudents = (searchText: string) => {
    dispatch({ type: 'students/search', payload: searchText });
  };

  useEffect(() => {
    filterStudents(searchTerm);
  }, [searchTerm]);

  return (
    <div className="StudentsPage">
      <div className="btns">
        <button>1 ФАЗА</button>
        <button>2 ФАЗА</button>
        <button>3 ФАЗА</button>
      </div>
      <form>
        <input
          type="text"
          placeholder="Введите имя"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <div className="students-container">
        {filteredStudent?.map((student) => <StudentInfo student={student} />)}
      </div>
      <a href="/Mark">Спасибо Марку</a>
    </div>
  );
}

export default StudentsPage;
