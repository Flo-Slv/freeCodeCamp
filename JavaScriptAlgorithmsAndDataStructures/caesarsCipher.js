function rot13(str) {
  let arr = str.split('');
  let toReturn = [];

  for (let i = 0; i < arr.length; i++) {
    let c = arr[i].charCodeAt();

    // Char between A and M.
    if (c >= 65 && c <= 77)
      toReturn.push(String.fromCharCode(c + 13));

    // Char between N and Z.
    else if (c >= 78 && c <= 90) {
      let n = 90 - c;
      let rest = 12 - n;

      toReturn.push(String.fromCharCode(65 + rest));
    }

    // Char is punctuation.
    else toReturn.push(arr[i]);
  }

  return toReturn.join('');
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
