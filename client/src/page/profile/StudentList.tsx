import React, { useEffect, useState } from 'react';
import StudentCard from './StudentCard';
import { Student } from './typeStudent';

export const StudentList = (): JSX.Element => {
  const [students, setStudents] = useState<Student[]>([]);

  const loadStudents = async (): Promise<void> => {
    const data = await (await fetch('/api/students')).json();
    if (data.message === 'success') {
      setStudents(data.students);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div className="StudentList">
      {students.map((student) => (
        <StudentCard student={student} key={student.id} />
      ))}
    </div>
  );
};

export default StudentList;
