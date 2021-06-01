'use strict';

const {
  Stack,
} = require('../Data-Structures/stacksAndQueues/stacks-and-queues');

function multiBracketValidation(input) {
  const stack = new Stack();
  // constants and stacks
  const bracketsStacks = {
    round: ['(', ')'],
    square: ['[', ']'],
    curly: ['{', '}'],
  };

  for (let char of input) {
    for (let bracket of Object.values(bracketsStacks)) {
      // if character is an closed bracket
      if (char === bracket[1]) {
        // checkt if there were previously an open bracket
        if (!stack.isEmpty()) {
          // check if mixing brackets {(}) x
          if (stack.peek() !== bracket[0]) {
            return false;
          }
          stack.pop();
          continue;
        } else {
          // No prev open bracket then the syntax not correct
          return false;
        }
        // if character is an open bracket
      } else if (char === bracket[0]) {
        // add it to its's stack
        stack.push(char);
      }
    }
  }
  // check that all open brackets has closed corrosponding
  if (!stack.isEmpty()) {
    return false;
  }
  // Syntax correct
  return true;
}

module.exports = multiBracketValidation;
