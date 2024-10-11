function addStringNumbers(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /[\n,]/;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0][2]);
    numbers = parts[1];
  }

  const numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));
  const negativeNums = numArray.filter((num) => num < 0);

  if (negativeNums.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeNums.join(",")}`);
  }

  return numArray.reduce((sum, num) => {
    return sum + num;
  }, 0);
}

module.exports = addStringNumbers;
