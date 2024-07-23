function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    for (let key in collection) {
      callback(collection[key], key, collection);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i], i, collection));
    }
  } else {
    for (let key in collection) {
      result.push(callback(collection[key], key, collection));
    }
  }
  return result;
}

function myReduce(collection, callback, acc) {
  const keys = !Array.isArray(collection) ? Object.keys(collection) : null;
  const length = keys ? keys.length : collection.length;
  let i = 0;
  
  if (acc === undefined) {
    acc = collection[keys ? keys[i++] : i++];
  }

  for (; i < length; i++) {
    const key = keys ? keys[i] : i;
    acc = callback(acc, collection[key], collection);
  }
  return acc;
}

function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) return collection[i];
    }
  } else {
    for (let key in collection) {
      if (predicate(collection[key], key, collection)) return collection[key];
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) result.push(collection[i]);
    }
  } else {
    for (let key in collection) {
      if (predicate(collection[key], key, collection)) result.push(collection[key]);
    }
  }
  return result;
}

function mySize(collection) {
  return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n) {
  if (n === undefined) return array[0];
  return array.slice(0, n);
}

function myLast(array, n) {
  if (n === undefined) return array[array.length - 1];
  return array.slice(-n);
}

function myKeys(object) {
  const keys = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}

function myValues(object) {
  const values = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      values.push(object[key]);
    }
  }
  return values;
}