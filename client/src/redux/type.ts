import type { Student} from '../app/type/student';
import type { User } from '../page/Auth/reducer/type';

export type Action =
  | { type: 'students/load'; payload: Student[] }
  | { type: 'auth/login'; payload: User }
  | { type: 'auth/logout' }
  | { type: 'auth/userCheck'; payload: User };