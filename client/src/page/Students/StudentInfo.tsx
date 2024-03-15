/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/button-has-type */
import type { Student } from '../../app/type/student';
import { useAppDispatch } from '../../redux/store';
import './StudentsPage.scss';

type StudentInfoProps = {
  student: Student;
};

export function StudentInfo({ student }: StudentInfoProps): JSX.Element {
  const dispatch = useAppDispatch();

  const plusCount = async (id: number): Promise<void> => {
    const data = await fetch(`/api/students/${id}/updateCount`, {
      method: 'PUT',
      headers: { 'Content-type': 'Application/json' },
      body: JSON.stringify({ countThanks: student.countThanks + 1 }),
    });
    const res = await data.json();

    if (res.message === 'success') {
      dispatch({ type: 'student/update', payload: res.student });
    }
  };

  const minusCount = async (id: number): Promise<void> => {
    const data = await fetch(`/api/students/${id}/updateCount`, {
      method: 'PUT',
      headers: { 'Content-type': 'Application/json' },
      body: JSON.stringify({ countThanks: student.countThanks - 1 }),
    });
    const res = await data.json();

    if (res.message === 'success') {
      dispatch({ type: 'student/update', payload: res.student });
    }
  };

  return (
    <div className="StudentInfo">
      <h2>{student.name} / Фаза: {student.phase}  </h2>
      <button type="button" className='btn-plus' onClick={() => plusCount(student.id)}>
        +
      </button>
      <h2>🙏 {student.countThanks}</h2>
      <button type="button" className='btn-minus' onClick={() => minusCount(student.id)}>
        -
      </button>
    </div>
  );
}

export default StudentInfo;
