import React, { useState, useEffect } from 'react';
import ModalWindow from '../../ui/modal/ModalPage';

function Add(): JSX.Element {
  const [isOpen, onClose] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(true);
    }, 10000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      <ModalWindow isOpen={isOpen} onClose={onClose}>
        <h1 id="ad-modal-title">От нашей команды желаем вам</h1>
        <img
          src="https://99px.ru/sstorage/86/2017/08/image_862708171321148377711.gif"
          width={300}
          height={300}
        />
        <button type="button" onClick={() => onClose((prev) => !prev)}>
          Спасибо
        </button>
      </ModalWindow>
    </div>
  );
}

export default Add;
