/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import StudentsPage from './page/Students/StudentsPage';
import type { Student } from './app/type/student';
import { useAppDispatch } from './redux/store';
import Navbar from './page/Navbar/Navbar';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const loadStudents = async (): Promise<void> => {
    const data: { students: Student[] } = await (await fetch('/api/students')).json();
    dispatch({ type: 'students/load', payload: data.students });
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div className="App">
      <h2>hello</h2>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/students" element={<StudentsPage />} />
      </Routes>
    </div>
  );
}

export default App;
