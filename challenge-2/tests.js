import assert from 'node:assert/strict';
import { describe, it, } from 'node:test';
import toCamelCase from './solution.js';

describe("toCamelCase", function () {
  it("should handle empty values", function () {
    assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
  })

  it("should remove underscores and convert first letter of word to upper case", function () {
    assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
    assert.strictEqual(toCamelCase("The_stealth_warrior"), "TheStealthWarrior", "toCamelCase('The_stealth_warrior') did not return correct value")
  });

  it("should remove hyphens and convert first letter of word to upper case", function () {
    assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
    assert.strictEqual(toCamelCase("the-Stealth-Warrior"), "theStealthWarrior", "toCamelCase('the-Stealth-Warrior') did not return correct value")
    assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
    assert.strictEqual(toCamelCase("I-am-a-programmer"), "IAmAProgrammer")
    assert.strictEqual(toCamelCase("i-am-a-programmer"), "iAmAProgrammer")
  });
});

describe('Random Tests', function () {

  function toCamelCaseSolution(str) {
    return (str || '').replace(/([\-_][a-zA-Z])/g, function (m) {
      return m.toUpperCase().replace(/[\-_]/, '');
    });
  }

  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (let i = 0; i < 200; i++) {
    let word = ["the", "The", "a", "A"][randint(0, 3)];
    word += ["-", "_"][randint(0, 1)];
    word += ["cat", "Cat", "pippi", "Pippi"][randint(0, 3)];
    word += ["-", "_"][randint(0, 1)];
    word += ["is", "was", "Is", "Was"][randint(0, 3)];
    word += ["-", "_"][randint(0, 1)];
    word += ["cute", "Savage", "pippi", "Pippi", "kawaii", "Omoshiroi", "evil", "Hungry"][randint(0, 7)];
    it(`Testing with ${word}`, function () {
      assert.strictEqual(toCamelCase(word), toCamelCaseSolution(word));
    });
  }

});