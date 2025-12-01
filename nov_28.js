function compare(word, guess) {
  const duplicates = []
  if (word.length !== guess.length) {
    console.log("Input words of a similar length");
  } else if (word.length === guess.length) {
    const arr1 = word.split("");
    const arr2 = guess.split("");
    for (let i = 0; i < arr1.length; i++){
      if (arr1[i] === arr2[i]) {
        duplicates.push(2);
      } else if (arr2.includes(arr1[i])) {
        duplicates.push(1)
      } else {
        duplicates.push(0)
      }
    }
  }
  console.log(duplicates);
  return word;
}

compare("POPPA", "APPLE");