const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr = [...expr];
  let result = '';

  while (arr.length > 0) {
    let set = arr.splice(0, 10);
    let key = '';
    if (set.every(function(char) {
      if (char === '*') {
        return true;
      } else {
        return false;
      }
    })) {
      set.length = 2;
    }

    while (set.length > 0) {
      let setOf2 = [];
      setOf2 = set.splice(0, 2)
      let char = '';
      if (setOf2.join('') === '10') {
        char += '.';
      } else if (setOf2.join('') === '11') {
        char += '-';
      } else if (setOf2.join('') === '**') {
        char += ' ';
      } else {
        continue;
      }
      key += char;
    }

    if (key === ' ') {
      result += ' ';
    } else {
      result += MORSE_TABLE[key];
    }
  }

  return result;
}

module.exports = {
    decode
}