function badlyFormattedFunction(param1, param2) {
  const obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
  };

  const array = [1, 2, 3, 4, 5];

  if (param1) {
    return obj;
  } else {
    return array;
  }
}

const str = 'This is a poorly formatted string';
const result = badlyFormattedFunction(true, false);
const result2 = badlyFormattedFunction(true, false);
const result3 = badlyFormattedFunction(true, false);

export default badlyFormattedFunction;
