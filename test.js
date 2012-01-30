
var sort = require('./sort.js');

function assert_equal(expected, result){
  console.log(expected);
  console.log(result);
  console.log("\n");
}

console.log("Sort:");

assert_equal([], sort.sort([]));
assert_equal([0,1], sort.sort([0, 1]));

assert_equal([1,1],  sort.sort([1, 1]));
assert_equal([1,2],  sort.sort([2, 1]));

assert_equal([1,1,3,5],  sort.sort([1, 1, 3, 5]));
assert_equal([1,3,3,5],  sort.sort([3, 1, 3, 5]));
assert_equal([1,2,3,5],  sort.sort([2, 1, 3, 5]));
assert_equal([0,1,3,5], sort.sort([0, 1, 3, 5]));
assert_equal([1,1,2,3,5], sort.sort([1, 2, 1, 3, 5]));
assert_equal([1,3,5,6], sort.sort([6, 1, 3, 5]));
assert_equal([1,3,4,5,6], sort.sort([4, 6, 1, 3, 5]));

assert_equal([1,3,5,7],  sort.sort([1, 3, 5, 7]));
assert_equal([1,1,3,5,7],  sort.sort([1, 3, 5, 7, 1]));
assert_equal([1,2,3,3,5,7],  sort.sort([1, 3, 5, 7, 2, 3]));

