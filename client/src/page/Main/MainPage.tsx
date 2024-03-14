import React from 'react';

function MainPage(): JSX.Element {
  return (
    <div className="MainPage">
      <div className="btns">
        <button>1 ФАЗА</button>
        <button>2 ФАЗА</button>
        <button>3 ФАЗА</button>
      </div>
      <form>
        <input type="text" placeholder="Начните вводить имя" />
        <button>Найти</button>
      </form>
      <div className="students-container" />
    </div>
  );
}

export default MainPage;
