// Truncate the text
function Truncate(str, length){
  if ( str.length > length){
    return str.slice(0, length - 1) + '\u2026';
  };
  return str;
}
alert(Truncate('hey this is a long string for the test', 20));
// Extract the money
function extractCurrencyValue(currency){
  return +currency.substring(1);
}
alert(extractCurrencyValue('$120'));
// Username validator 
function userNameValid(){
  let userName;
  do {
    userName = prompt('enter your username'); 
  } while ( userName.length < 3 || userName.length > 15 
    || userName.includes(' '));
    return `Welcome ${userName}`;
}; 
alert(userNameValid());
// Capitalize words
function upperCaseWords(sentence){
  let upperCaseSentence = '';
  let words = sentence.split(' ')
  for (let word of words) {
    upperCaseSentence += word[0].toUpperCase() + word.substring(1) + ' ';
  }
  return upperCaseSentence;
}
alert(upperCaseWords(`this is the line to get capital Each Letter of the Sentence`));
// Truncate with word boundary
function truncateWord(line, maxlength){
  let words = line.split(' ');
  let result = '';
    for (let word of words) {
      if ( result.length + word.length < maxlength){
      result += word + ' ';
      } else {
        return result + '\u2026';
      }          
  }
}
  alert(truncateWord('this is the line to be truncated by the function above', 15));