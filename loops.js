// array containing 1-5
const numbers = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
  }

// while loop that decrements from 5 to 1
let count = 5;

while (count > 0){
  console.log(count);  count--;
}


// prints even numbers from array
for (const num of numbers){
    if (num % 2 === 0){
      console.log(num);
  }
}

// adds numbers in array and prints the sum
let sum = 0;
for (const num of numbers){
  sum += num;
}
console.log("Sum:", sum);