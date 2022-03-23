let convertToRoman = num => {
  // Create objects with Roman equivalents.
  // Do not forget that 0 does not exist in Roman numerals.
  const R = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX'
  };

  const Rx = {
    0: '',
    1: 'X',
    2: 'XX',
    3: 'XXX',
    4: 'XL',
    5: 'L',
    6: 'LX',
    7: 'LXX',
    8: 'LXXX',
    9: 'XC'
  };

  const Rxx = {
    0: '',
    1: 'C',
    2: 'CC',
    3: 'CCC',
    4: 'CD',
    5: 'D',
    6: 'DC',
    7: 'DCC',
    8: 'DCCC',
    9: 'CM'
  };

  const Rxxx = {
    0: '',
    1: 'M',
    2: 'MM',
    3: 'MMM'
  };

  // String to return with a Roman number.
  let toReturn = '';

  // String to Arr.
  let n = num.toString().split('');
  let nl = n.length;

  // Return roman numeral string.
  if (nl == 1) toReturn = R[num];

  else if (nl == 2) toReturn = `${Rx[n[0]]}${R[n[1]]}`;

  else if (nl == 3) toReturn = `${Rxx[n[0]]}${Rx[n[1]]}${R[n[2]]}`;

  else if (nl == 4)
    toReturn = `${Rxxx[n[0]]}${Rxx[n[1]]}${Rx[n[2]]}${R[n[3]]}`;

  else return false;

 return toReturn;
};

convertToRoman(3999);
