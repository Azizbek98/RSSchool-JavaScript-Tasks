module.exports = function toReadable (number) {
    const beforeTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    const afterTwenty = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    if (!number) 
        return beforeTwenty[number];

    let [ ones, tens, huns ] = String(number).split('').reverse(); //splits to digits

    huns = (Number(huns) || 0) === 0 ? '' : beforeTwenty[Number(huns)] + ' hundred'; //

    if( tens === '1') {
        tens = beforeTwenty[Number(tens + ones)];
        ones = '';
    } else {
        tens = (Number(tens) || 0) === 0 ? '' : afterTwenty[Number(tens)];
        ones = (Number(ones) || 0) === 0 ? '' :  beforeTwenty[Number(ones)];
    }

    return [huns, tens, ones].filter(value => value).join(' ');
}
