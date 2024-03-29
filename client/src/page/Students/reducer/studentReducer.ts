/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable import/prefer-default-export */

import type { Action } from '../../../redux/type';
import type { Student, StudentPhase } from '../../../app/type/student';

export type StudentState = {
  students: Student[];
  phase?: StudentPhase;
  filteredStudent?: Student[];
};

export const initialState: StudentState = {
  students: [],
  phase: 1,
  filteredStudent: [],
};

const studentReducer = (state: StudentState = initialState, action: Action): StudentState => {
  switch (action.type) {
    case 'students/load':
      return {
        ...state,
        students: action.payload,
        filteredStudent: action.payload,
      };
    case 'students/add':
      return {
        ...state,
        filteredStudent: [...state.students, action.payload],
      };
    case 'students/remove':
      return {
        ...state,
        filteredStudent: state.students.filter((task) => task.id !== action.payload),
      };

    case 'students/search':
      const search = action.payload;
      const regex = new RegExp(`^${search}`);
      return {
        ...state,
        filteredStudent: state.students.filter((student) => regex.test(student.name.toLowerCase())),
      };

    case 'student/update':
      return {
        ...state,
        students:state.students.map((student) =>
        student.id === action.payload.id ? action.payload : student,
      ),
        filteredStudent: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student,
        ),
      };

    case 'students/phase':
      return {
        ...state,
        phase: action.payload,
      };
    default:
      return state;
  }
};

export default studentReducer;
