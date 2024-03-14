import React from 'react';
import StudentCard from './StudentCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const StudentList = (): JSX.Element => {
  const students = useSelector((store: RootState) => store.students.students);

  return (
    <div className="StudentList">
      {students.map((student) => (
        <StudentCard student={student} key={student.id} />
      ))}
    </div>
  );
};

export default StudentList;
