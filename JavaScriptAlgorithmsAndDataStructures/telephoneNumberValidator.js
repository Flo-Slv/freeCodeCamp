let telephoneCheck = str => {
  // For US phone number.
  let regex = /(^\d{3}[-|\s]\d{3}[-|\s]\d{4}$)|(^[0-9]{10}$)|(^\(\d{3}\)[\s|\d]\d{2,3}-\d{4}$)|(^1[\s]?\(\d{3}\)\s?\d{3}[-|\s]\d{4}$)|(^1\s\d{3}[-|\s]\d{3}[-|\s]\d{4}$)/;

  return regex.test(str);
};

telephoneCheck("555-555-5555");
