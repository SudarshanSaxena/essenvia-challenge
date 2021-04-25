let data = ['sud'];

function getData() {
  console.log(data);
  return data[data.length - 1];
}

function putData(item) {
  console.log(data[data.length - 1])
  data.push(item);
}

function revert() {
  data.pop();
}

export { getData, putData, revert };
