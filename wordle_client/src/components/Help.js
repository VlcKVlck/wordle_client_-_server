import './NavBar.css';

export function Help() {
  return (
    <ol>
      <li> You're given a set number of attempts to guess a word. Each time you play you will get a new word. </li>
      <li> Each attempt at guessing the word offers hints by the highlighted letter coloring.</li>
      <li>
        {' '}
        If a letter contains a <span style={{ backgroundColor: 'green', fontFamily: 'monospace' }}>green</span> background, this indicates you guessed the
        proper letter in the correct spot.
      </li>
      <li>
        {' '}
        Anything with a <span style={{ backgroundColor: 'yellow', fontFamily: 'monospace' }}>yellow</span> background indicates you've guessed the correct
        letter, but it's in the wrong spot.
      </li>
      <li>
        {' '}
        In contrast, letters with <span style={{ backgroundColor: 'darkgray', fontFamily: 'monospace' }}>dark gray</span> backgrounds are not in the word at
        all, which means you can skip them in your following guesses.
      </li>
      <li> Enjoy!</li>
    </ol>
  );
}
