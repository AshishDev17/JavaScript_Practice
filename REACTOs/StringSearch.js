// Problem: String search
//indexOf('or', 'hello world'); // should return 7
//indexOf('howdy', 'hello world'); // should return -1

const indexOf = (needle, haystack) => {
  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) break;
      if (j === needle.length - 1) return i;
    }
  }

  return -1;
};

indexOf('or', 'hello world'); // should return 7
indexOf('howdy', 'hello world'); // should return -1
