console.log("---*reverse number*---");
const reverse = (num) => num.toString().split("").reverse().join("");
console.log(reverse(34532));
console.log(reverse(-12345));
console.log();

console.log("---*unique*---");
const unique = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
      result.push(currentValue);
    }
  }
  return result.join(", ");
};
console.log(unique([0, 0, 0.77, 0, 0]));
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]));
console.log(unique([3, 3, 3, 7, 3, 3]));
console.log();

console.log("---*findGreatest*---");
const findGreatest = (arr, num) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element > num) {
      result.push(element);
    }
  }
  return result; //.join(", ") string
};
console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));
console.log();

console.log("---**Is it Symmetrical?**---");
const isSymmetrical = (num) => {
  return num.toString() === num.toString().split("").reverse().join("");
};
console.log(isSymmetrical(7227)); // ➞ true
console.log(isSymmetrical(12567)); // ➞ false
console.log(isSymmetrical(44444444)); // ➞ true
console.log(isSymmetrical(9939)); // ➞ false
console.log(isSymmetrical(1112111)); // ➞ true
console.log();

const average = (...nums) => {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = +nums[i];
  }
  return result / nums.length;
};
console.log(average(0)); // ---> 0
console.log(average(1, 2)); // ---> 1.5
console.log(average(1, 3, 6, 10)); // ---> 5
console.log(average(12, 14, 16)); // ---> 14
