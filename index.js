// Code your solution here

const drivers =['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

 const obDrivers = [
     {
       name: 'Bobby',
       hometown: 'Pittsburgh' },
     {
       name: 'Sammy',
       hometown: 'New York' } ,
     {
       name: 'Sally',
       hometown: 'Cleveland' },
     {
       name: 'Sally',
       hometown: 'Towson'},  
     {
       name: 'Annette',
       hometown: 'Los Angeles' },
     {
       name: 'Bobby',
       hometown: 'Tampa Bay' }
   ];
  
const findMatch = drivers.filter(function (pHolder){
  //placeholder starts with first object listed
  // then goes down the list in order
  // filter out the data subset/portion that meets certain condition
  //console.log(pHolder);
  pHolder.name === 'Bobby';
  // returns true or false
  if (pHolder.name === 'Bobby') {
    return true;
  } else {
    return false;
  }
});
console.log(findMatch);

const fruit = ['apple', 'lemon', 'lemon', 'orange'];

const findFruit = fruit.filter(function (fruHolder) {
  if (fruHolder === 'lemon') {
    return true;
  } else {
    return false;
  }
});
console.log(findFruit);

// findMatching should have 2 arguments
// an array and a string
function findMatching(collection, matcher) {
  const findIt = collection.filter(function (string) {
    if (matcher.toLowerCase() === string.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  });
  console.log(findIt);
  return findIt;
}
findMatching(drivers, 'Bobby');
//placeholders allow us to use different arrays on same function
findMatching(fruit, 'lemon');

// function findMatching(collection, matcher) {
//     const match = [];
//     //creates a new array

//     for (const driver of collection) {
//       // taking an object from collection

//       console.log(driver.name, matcher);

//         if (driver.toLowerCase() === matcher.toLowerCase()) {
//             // checking condition for the driver's names that matches
          
//             match.push(driver);
//             // adds the matching name to match array
//         }
       
//     }
//     return match;
    
//   }

  // assignment asked to use filter

  function fuzzyMatch(collection, matcher) {
    const matchLetter = collection.filter(function(name) {
      // recall that each letter is assigned a number
      // for ex. "Don", 'D' would be 0, 'o' is 1, 'n' is 2
      // matcher is placeholder for provided lettters
      // name is placeholder for driver's names
      // compare matcher to string for matching first letters
      if (name.startsWith(matcher)) {
        return true;
      } else {
        return false;
      }
    });
    // query array for names beginning with provided letters
    console.log(matchLetter);
    return matchLetter;
  }

  fuzzyMatch(drivers, 'Bo');

  fuzzyMatch(fruit, 'lem')


  function matchName(collection, string) {
    // driver object has 2 properties, name and hometown
    // name property matches provided string argument
    const obMatch = collection.filter(function(obj) {
      //since driver object has 2 properties, should function() have
      // 2 parameters?
      if (string === obj.name) {
        return true;
      } else {
        return false;
      }
    });
    console.log(obMatch);
    return obMatch;
  }

  matchName(obDrivers, 'Sally')
//findMatching(drivers, 'Bobby');
//findMatching(drivers, 'Sally');

