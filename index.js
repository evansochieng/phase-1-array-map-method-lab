const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Create an case title

// // First let me do them separately
// function upperCase(title){
//   let titleCase = title.split(' ').map( function(word){
//     return word.replace(word[0], word[0].toUpperCase());
//   }).join(' ');

//   return titleCase;
// }

// const titleCased = () => {
//   let titleCasedTutorials = tutorials.map(upperCase);

//   return titleCasedTutorials;
// }

// titleCased();

// REDO USING ITERATION WITHIN ITERATION
// EITHER SHOULD WORK
// Iterate within the iteration
const titleCased = () => {
  let titleCasedTutorials = tutorials.map( (title) => {
    let casedTitle = title.split(' ').map( function(word){
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
    return casedTitle;
  })

  return titleCasedTutorials;
}

// FANTASTIC BOY!
