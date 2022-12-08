function checkPart(part) {
  const reverseString = (part) => part.reverse().join("");
  const testWhioutOneCharacter = (arr) => {
    return arr.filter((element, index, arr2) => {
      let string = arr2.filter((act, index2) => index2 != index).join("");
      return string == reverseString([...string]);
    });
  };
  return reverseString([...part]) == part
    ? true
    : testWhioutOneCharacter([...part]).length > 0;
}

console.log(checkPart("zzzoonzzz"));
