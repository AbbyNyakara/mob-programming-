module.exports = function move(starting, goal) {
    // move the smaller one at the starting to a number that's nether the starting or the goal.
    // Remain with the bigger one that goes at the bottom
    // Move the bigger one to the goal;
    // Move the smaller one to the goal;
  let intermediate = [1,2,3].filter(value => ![starting,goal].includes(value));
  return `${starting}->${intermediate} ${starting}->${goal} ${intermediate}->${goal}`
}

console.log(move(1, 3))
// => 1->2 1->3 2->3

console.log(move(2, 3))
// => 2->1 2->3 1->3
}
