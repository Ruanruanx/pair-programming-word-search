const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''))
  const horizontalJoinReverse = letters.map(ls => ls.reverse().join(''));
  const verticalLetters = transpose(letters);
  const verticalJoin = verticalLetters.map(ls => ls.join(''));
  const verticalJoinReverse = verticalLetters.map(ls => ls.reverse().join(''));
  //new array element ['AECTYEAS','WIF...']
  //new array element [(0,2),(1,1),(2,0)]

  // for (let i = 0; i < letters.length; i++) {
  //   for (let j = 0; j < letters[i].length; j++) {
  //     let result = [];
  //     const wordLength = word.length;
  //     for (let k = 0; k < wordLength; k++) {
  //       result.push(letters[i+k][j+k]);
  //     }
  //     let finalResult = result.join('');
  //     if(finalResult === word){
  //       console.log(finalResult);
  //     }
  //   }
  // }

  const allLetters = [];
  allLetters.push(horizontalJoin);
  allLetters.push(verticalJoin);
  allLetters.push(horizontalJoinReverse);
  allLetters.push(verticalJoinReverse);

  for (l of allLetters) {
    //  console.log(l.includes(word));
    if (l.includes(word)) {
      return true
    }
  }
  return false;
}

const transpose = function(matrix) {
  // Put your solution here
  let result = [];
  let rowNum = matrix[0].length;
  for (let i = 0; i < rowNum; i++) {
    let row = [];
    for (let j = 0; j < matrix.length; j++) {
      row.push(matrix[j][i]);

    }
    result.push(row);
  }
  return result;
};

module.exports = wordSearch