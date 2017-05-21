exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(sum, item) {
      return sum + item;
    }, 0);
  },

  remove: function(arr, item) {
    return arr.filter(function(remove) {
      return item !== remove;
    });
  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    var tail = arr.splice(index);
    return arr.concat(item, tail);
  },

  count: function(arr, item) {
    return arr.reduce(function(sum, x) {
      var num = sum;
      if (x === item) {
        num++;
      }
      return num;
    }, 0);
  },

  duplicates: function(arr) {

  },

  square: function(arr) {
    return arr.map(function(item) {
      return item * item;
    });
  },

  findAllOccurrences: function(arr, target) {
    var found = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        found.push(i);
      }
    }
    return found;
  }
};
