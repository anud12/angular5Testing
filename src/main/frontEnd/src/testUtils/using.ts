export function using(func, values) {
  values = transformObjectToArray(values);
  values.forEach(function (value) {
    if (!(value instanceof Array)) {
      value = [value];
    }
    func.apply(this, value);
  });
}
function transformObjectToArray(object) {
  const array = [];
  Object.getOwnPropertyNames(object).forEach((property) => {
    object[property].forEach((value, index) => {
      if (array[index] === undefined) {
        array[index] = {};
      }
      array[index][property] = value;
    });
  });
  console.log(array);
  return array;
}
