import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import Footer from '../../ui/footer/Footer';
import StudentInfo from './StudentInfo';
import './StudentsPage.scss';

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
    <div className="MainPage">
      <form>
        <input className='formSearch'
          type="text"
          placeholder="Введите имя"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <div className="students-container">
        {filteredStudent?.map((student) => <StudentInfo student={student} key={student.id} />)}
      </div>
      <Footer />
    </div>
  );
}

export default StudentsPage;
