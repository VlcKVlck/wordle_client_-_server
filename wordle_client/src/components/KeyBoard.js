import { AnsContext } from '../providers/ans-context';
import { useContext } from 'react';

export function KeyBoard() {
  const { slateUpdate, currentAnswers } = useContext(AnsContext);
  const context = useContext(AnsContext);
  const characters = Array.from(Array(26), (val, i) => String.fromCharCode(i + 65));
  const firstRow = characters.slice(0, 10);
  const secondRow = characters.slice(10, 18);
  const thirdRow = characters.slice(18, 26);

  function handleMouseClick(event) {
    slateUpdate(event.target.id, context);
  }

  function setKeyColor(key) {
    for (let i = currentAnswers.length - 1; i >= 0; i--) {
      if (currentAnswers[i].value === key) {
        return currentAnswers[i].guess;
      }
    }
    return '';
  }

  function deleteLast() {
    slateUpdate('BACKSPACE', context);
  }

  return (
    <div className="KeyboardInput">
      <div className="firstrow">
        {firstRow.map((btn) => (
          <button type="button" className={'letters ' + setKeyColor(btn)} id={btn} key={btn} value={btn} onClick={handleMouseClick}>
            {btn}
          </button>
        ))}
      </div>
      <div className="secondrow">
        {secondRow.map((btn) => (
          <button type="button" className={'letters ' + setKeyColor(btn)} id={btn} key={btn} value={btn} onClick={handleMouseClick}>
            {btn}
          </button>
        ))}
      </div>
      <div className="thirdrow">
        <button type="button" className="letters widerbutton">
          {' '}
          ENTER
        </button>
        {thirdRow.map((btn) => (
          <button type="button" className={'letters ' + setKeyColor(btn)} id={btn} key={btn} value={btn} onClick={handleMouseClick}>
            {btn}
          </button>
        ))}
        <button type="button" className="letters widerbutton" onClick={deleteLast}>
          {' '}
          ←{' '}
        </button>
      </div>
    </div>
  );
}
