/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import StudentsPage from './page/Students/StudentsPage';
import type { Student } from './app/type/student';
import { useAppDispatch } from './redux/store';
import ProfilePage from './page/profile/ProfilePage';

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
      <Routes>
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
