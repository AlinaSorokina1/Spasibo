/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react';

import './App.css';
import StudentsPage from './page/Students/StudentsPage';
import type { Student } from './app/type/student';

function App(): JSX.Element {
  const [students, setStudents] = useState<Student[]>([]);

  const loadStudents = async (): Promise<void> => {
    const data: { students: Student[] } = await (await fetch('/api/students')).json();
    setStudents(data.students);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div className="App">
      <h2>hello</h2>
      <StudentsPage students={students} />
    </div>
  );
}

export default App;
