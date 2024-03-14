/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable import/prefer-default-export */

import type { Action } from '../../../redux/type';
import type { Student } from '../../../app/type/student';

export type StudentState = {
  students: Student[];
};

export const initialState: StudentState = {
  students: [],
};

const studentReducer = (state: StudentState = initialState, action: Action): StudentState => {
  switch (action.type) {
    case 'students/load':
      return {
        ...state,
        students: action.payload,
      };
    case 'students/add':
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case 'students/remove':
      return {
        ...state,
        students: state.students.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};

export default studentReducer;
