export async function checkIfLegitWord(currentAnswers, startIndex) {
  let word = '';
  currentAnswers.slice(startIndex, startIndex + 5).forEach((answer) => {
    word += answer.value;
  });

    let res,
      res2 = '';
    try {
      res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      res2 = await res.text();
      if (res.ok === true) {
        return true
      }
      else{
        throw new Error('Network response error when doing word validation');
      }
    } catch (e) {
      console.error(e.message);
      return false;
    }
}
