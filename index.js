function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    let newArray = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        newArray.push(callback(collection[i]));
      }
    } else {
      for (let key in collection) {
        newArray.push(callback(collection[key], key));
      }
    }
    return newArray;
  }
  
  function myReduce(collection, callback, acc, context) {
    let startIdx = 0;
    if (acc === undefined) {
      if (Array.isArray(collection)) {
        acc = collection[0];
        startIdx = 1;
      } else {
        const keys = Object.keys(collection);
        acc = collection[keys[0]];
        startIdx = 1;
      }
    }
    if (Array.isArray(collection)) {
      for (let i = startIdx; i < collection.length; i++) {
        acc = callback.call(context, acc, collection[i], collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = startIdx; i < keys.length; i++) {
        const key = keys[i];
        acc = callback.call(context, acc, collection[key], collection);
      }
    }
    return acc;
  }
  function myFirst(collection, n = 1) {
    if (Array.isArray(collection)) {
      return collection.slice(0, n);
    } else if (typeof collection === 'object') {
      const keys = Object.keys(collection);
      return keys.slice(0, n).map(key => collection[key]);
    } else {
      return undefined;
    }
  }
function myLast(collection, n = 1) {
    if (Array.isArray(collection)) {
      return collection.slice(-n);
    } else {
      const keys = Object.keys(collection);
      const lastKeys = keys.slice(-n);
      return lastKeys.map(key => collection[key]);
    }
  }
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else {
      for (let key in collection) {
        if (predicate(collection[key])) {
          return collection[key];
        }
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    let newArray = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          newArray.push(collection[i]);
        }
      }
    } else {
      for (let key in collection) {
        if (predicate(collection[key])) {
          newArray.push(collection[key]);
        }
      }
    }
    return newArray;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }

  function myKeys(obj) {
    return Object.keys(obj);
  }
  
  function myValues(obj) {
    return Object.values(obj);
  }
