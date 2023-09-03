// 1. Counting sheep...
// Consider an array/list of sheep where some sheep may be missing 
// from their place. We need a function that counts the number of sheep present in the array (true means present).

const arrayOfSheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]


function countSheeps(arrayOfSheep) {
    const presentSheep = arrayOfSheep.filter(elem => elem === true);
    return presentSheep.length;
}

const numberOfPresentSheep = countSheeps(arrayOfSheep);
console.log(`number of present sheep: ${numberOfPresentSheep}`)

// 2. Make a function that returns the value multiplied by 50 and increased by 6. 
// If the value entered is a string it should return "Error".

function problem(x){
    //your code here
if (typeof(x) === "number"){
  return (x * 50) + 6
}
  else {
    return "Error";
  }
}
console.log(problem(10));

// 3. Create a function called shortcut 
// to remove the lowercase vowels (a, e, i, o, u ) in a given string.


function shortcut (string) {
  return string.replace(/[aeiou]/g, "");

}
console.log(shortcut("hello"))

// 4. Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// 1 Решение ----------------------------
function bmi(weight, height) {
    
        if ( weight <= 18.5){
            weight / height ** 2
            return "Underweight"
        }
        else if (weight <= 25.0){
            weight / height ** 2
            return "Normal"
        }
        else if (weight <= 30.0){
            weight / height ** 2
            return "Overweight"
        }
        else if (weight > 30){
            weight / height ** 2
            return "Obese"
        }  
}
console.log(bmi(38,129))

// Первое решение в VS CODE сработало идеально, но CODEWARS задачу не принял. Пришлось проверить 
// через чат GPT. Получилось такое решение. Не понятно,была ли допущенна ошибка в моем коде ,или просто 
// CODEWARS требовал конкретное решение ?

// 2 Решение (chat GPT) ---------------------------
// function bmi(weight, height) {
//     const countBmi = weight / height * height 
//           if ( countBmi <= 18.5){
              
//              return "Underweight"
//           }
//           else if (countBmi <= 25.0){
            
//               return "Normal"
//           }
//           else if (countBmi <= 30.0){
          
//               return "Overweight"
//           }
//           else if (countBmi > 30){
           
//               return "Obese"
//           }  
//   }

// 5. ?????

// 6. Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// Преобразование типов  https://doka.guide/js/typecasting/

function boolToWord( bool ){
    
if (bool === Boolean(true)){

    return "Yes"
}
else if ( bool === Boolean(false)){
    return "No"
}
}

// 7. Grasshopper - Summation

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
    // Code here
      let sum = 0;
      for (let i = 1; i <= num; i++) {
          sum += i;
      }
      return sum;
  }
console.log(summation(3))


// 8.  Array plus array

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
 
    const sum1 = arr1.reduce((acc, num) => acc + num, 0);

    const sum2 = arr2.reduce((acc, num) => acc + num, 0);

    return sum1 + sum2;
}



// //9. Total amount of points
// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


