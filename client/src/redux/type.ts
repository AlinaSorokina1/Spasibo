import type { Student, StudentId } from '../app/type/student';
import type { User } from '../page/Auth/reducer/type';

export type Action =
  | { type: 'students/load'; payload: Student[] }
  | { type: 'auth/login'; payload: User }
  | { type: 'auth/logout' }
  | { type: 'auth/userCheck'; payload: User }
  | { type: 'students/remove'; payload: StudentId }
  | { type: 'students/add'; payload: Student }
  | { type: 'students/search'; payload: string }
  | { type: 'student/update'; payload: Student }
  | { type: 'students/phase'; payload: number }
  | { type: 'students/profile/load'; payload: Student[] };
