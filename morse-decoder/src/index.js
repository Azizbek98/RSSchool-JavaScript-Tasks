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
    let arr = [];
    for (var i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10))
    } 
    arr = arr.map(item => {
        item = item.replace(/11/g, '-').replace(/10/g, '.').replace(/0/g,'').replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ');
        if(item === ' ') return ' ';
        return MORSE_TABLE[item];
    })
    
    return arr.join('');
}

module.exports = {
    decode
}