/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import StudentsPage from './page/Students/StudentsPage';
import type { Student } from './app/type/student';
import { RootState, useAppDispatch } from './redux/store';
import Navbar from './page/Navbar/Navbar';
import { useSelector } from 'react-redux';
import ProfilePage from './page/profile/ProfilePage';

import AuthorizationPage from './page/Auth/AuthorizationPage';
import type { User } from './page/Auth/reducer/type';

function App(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);
  const phase = useSelector((store: RootState) => store.students.phase);
  const dispatch = useAppDispatch();

  const loadStudents = async (phase: number): Promise<void> => {
    const data: { students: Student[] } = await (await fetch(`/api/students/${phase}`)).json();
    dispatch({ type: 'students/load', payload: data.students });
  };

  const checkUser = async (): Promise<void> => {
    const data: { message: string; user: User } = await (await fetch('api/auth/check')).json();
    console.log(data);

    if (data.message === 'success') {
      dispatch({ type: 'auth/userCheck', payload: data.user });
    }
  };
  console.log(user);

  useEffect(() => {
    checkUser().catch(console.log);
  }, []);

  useEffect(() => {
    loadStudents(phase);
  }, [phase]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<AuthorizationPage />} />
      </Routes>
    </div>
  );
}

export default App;
