import React, { useEffect, useState } from 'react';
import StudentInfo from './StudentInfo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

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
        {filteredStudent?.map((student) => <StudentInfo student={student} key={student.id}/>)}
      </div>
    </div>
  );
}

export default StudentsPage;
