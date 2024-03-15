import React from 'react';
import { useDispatch } from 'react-redux';
import '../../page/Students/StudentsPage.scss';
export const Footer = (): JSX.Element => {
const dispatch = useDispatch()
   const changePhase = (phaseNumber: number) => {
      dispatch({ type: 'students/phase', payload: phaseNumber });
    };
  return (
    <div className="Footer">
      <button type="button" className='btn-phase' onClick={() => changePhase(1)}>
        1 ФАЗА
      </button>
      <button type="button" className='btn-phase2' onClick={() => changePhase(2)}>
        2 ФАЗА
      </button>
      <button type="button" className='btn-phase3' onClick={() => changePhase(3)}>
        3 ФАЗА
      </button>
    </div>
  );
};

export default Footer;
