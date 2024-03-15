import React from 'react';
import { useDispatch } from 'react-redux';

export const Footer = (): JSX.Element => {
const dispatch = useDispatch()
   const changePhase = (phaseNumber: number) => {
      dispatch({ type: 'students/phase', payload: phaseNumber });
    };
  return (
    <div className="Footer">
      <button type="button" onClick={() => changePhase(1)}>
        1 ФАЗА
      </button>
      <button type="button" onClick={() => changePhase(2)}>
        2 ФАЗА
      </button>
      <button type="button" onClick={() => changePhase(3)}>
        3 ФАЗА
      </button>
    </div>
  );
};

export default Footer;
