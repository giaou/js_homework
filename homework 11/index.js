const nums = [10, 20, 30];
const nums1 = [1, 2, 3];
const nums2 = [-2, -1, 0, 99];
const nums3 = [1, 1, 2];
const nums4 = [1, 1, 3];
const nums5 = [4, 5, 6];
const nums6 = [1, -3, 5];
const nums7 = [-2, 3, -5, 7, 10];
const words = ["hi", "hello", "good"];
const appleGrape = ["apple", "grape", "apple", "apple"];
const search = ["hello", "world", "search", "good"];
const multipleSearch = ["hello", "world", "search", "good", "search"];
const notSearch = ["not", "found"];
const greenRed = ["green", "red", "blue", "red"];
const redGreen = ["red", "green", "green", "red"];
const eggHam = ["egg", "apple", "egg", "egg", "ham"];

//11a
nums[nums.length - 1] = 99;
//console.log(nums);

//11b
function getLastValue(arr) {
  const lastIndex = arr.length - 1;
  return arr[lastIndex];
}
//console.log(getLastValue(nums));
//console.log(getLastValue(words));

//11c
function arraySwap(arr) {
  const firstIndex = 0;
  const lastIndex = arr.length - 1;
  const temp = arr[firstIndex];
  arr[firstIndex] = arr[lastIndex];
  arr[lastIndex] = temp;

  return arr;
}
//console.log(arraySwap(nums));
//console.log(arraySwap(words));

//11d
function countsUpBy2() {
  for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
}
//countsUpBy2();

//11e
function countsDownTo0() {
  for (let i = 5; i >= 0; i--) {
    console.log(i);
  }
}
//countsDownTo0();

//11f
function countsUpBy2While() {
  let i = 0;
  while (i <= 10) {
    console.log(i);
    i += 2;
  }
}
//countsUpBy2While();

function countsDownTo0While() {
  let i = 5;
  while (i >= 0) {
    console.log(i);
    i -= 1;
  }
}
//countsDownTo0While();

//11g-h
function increasedBy1(arr) {
  let new_arr = [];

  for (let i = 0; i < arr.length; i++) {
    new_arr[i] = arr[i] + 1;
  }

  return new_arr;
}

//console.log(increasedBy1(nums1));
//console.log(increasedBy1(nums2));

//11i
function addNum(arr, num) {
  let new_arr = [];

  for (let i = 0; i < arr.length; i++) {
    new_arr[i] = arr[i] + num;
  }

  return new_arr;
}

//console.log(addNum(nums1, 2));
//console.log(addNum(nums1,3));
//console.log(addNum(nums2,2));

//11j
function addArrays(arr1, arr2) {
  let new_arr = [];

  for (let i = 0; i < arr1.length; i++) {
    new_arr[i] = arr1[i] + arr2[i];
  }

  return new_arr;
}

//console.log(addArrays(nums3, nums4));
//console.log(addArrays(nums1, nums5));

//11k
function countPositive(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      count++;
    }
  }

  return count;
}

//console.log(countPositive(nums6));
//console.log(countPositive(nums7));

//11l-m
function minMax(nums) {
  if (nums.length <= 0) {
    return `min: null, max: null`;
  }
  let min = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
    else if (nums[i] > max) max = nums[i];
  }

  return `min: ${min}, max: ${max}`;
}

// console.log(minMax(nums6));
// console.log(minMax(nums7));
// console.log(minMax([]));
// console.log(minMax([3]));

//11n
function countWords(words) {
  const obj = {};

  for (let i = 0; i < words.length; i++) {
    if (obj[`${words[i]}`] === undefined) obj[`${words[i]}`] = 1;
    else obj[`${words[i]}`] += 1;
  }

  return obj;
}

//console.log(countWords(appleGrape));

//11o-p
function foundSearch(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "search") {
      return i;
    }
  }
  return -1;
}

// console.log(foundSearch(search));
// console.log(foundSearch(notSearch));
//console.log(foundSearch(multipleSearch));

//11q
function findIndex(arr, word) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) return i;
  }
  return -1;
}

// console.log(findIndex(greenRed, "red"));
// console.log(findIndex(redGreen, "yellow"));

//11r
function removeEgg(foods) {
  let arr = [];
  let count = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg") continue;
    arr[count++] = foods[i];
  }

  return arr;
}

//console.log(removeEgg(eggHam));

//11s
function removeFirst2Egg(foods) {
  let arr = [];
  let count = 0;
  let countEgg = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg" && countEgg <= 1) {
      countEgg += 1;
      continue;
    }
    arr[count++] = foods[i];
  }

  return arr;
}

//console.log(removeFirst2Egg(eggHam));

//11t-u
function removeLast2Eggs(foods) {
  let arr = [];
  let count = 0;
  let countEgg = 0;

  for (let i = foods.length - 1; i >= 0; i--) {
    //console.log(foods[i]);
    if (foods[i] === "egg" && countEgg <= 1) {
      countEgg += 1;
      continue;
    }
    arr[count++] = foods[i];
  }

  return arr.reverse();
}

// console.log(removeLast2Eggs(eggHam));
// console.log(eggHam);

//11v
function FizzBuzz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

//FizzBuzz();

//11w
function unique(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (findIndex(result, arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
}

// console.log(unique(greenRed));
// console.log(unique(redGreen));

//for homework 11x: look for todo list project

