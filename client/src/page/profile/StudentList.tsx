import React, { useEffect, useState } from 'react';
import StudentCard from './StudentCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const StudentList = (): JSX.Element => {
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
    <div className="StudentList">
      <input
        type="text"
        placeholder="Введите имя"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredStudent?.map((student) => <StudentCard student={student} key={student.id} />)}
    </div>
  );
};

export default StudentList;
