const oldDims = "18 1/4 x 17 7/8 inches";


// Find fractions
const findFractions = (str) => {
  const positions = [];

  for (var i = 0; i < str.length; i++) {
    if (str[i] === '/') {
      positions.push(i);
    }
  }
  return positions;
}


// Convert string
const convertDims = (str) => {
  const result = [];
  const positions = findFractions(str);

  if (positions.length > 0) {
    positions.forEach((position, index) => {
      if (index === 0) {
        result.push(str.slice(0, position - 1));
        result.push(`<sup>${str[position - 1]}</sup>/<sub>${str[position + 1]}</sub>`)
      }
      else {
        result.push(str.slice(positions[index - 1] + 2, position - 1));
        result.push(`<sup>${str[position - 1]}</sup>/<sub>${str[position + 1]}</sub>`)
      }
    });
    result.push(str.slice(positions[positions.length - 1] + 2));
  }

  console.log(result.join(''));
}


convertDims(oldDims);
