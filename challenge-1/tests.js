import assert from 'node:assert/strict';
import { describe, it, } from 'node:test';
import maskify from './solution.js';

describe("maskify", function () {
  it("should work for some examples", function () {
    assert.equal(maskify('4556364607935616'), '############5616');
    assert.equal(maskify('1'), '1');
    assert.equal(maskify('11111'), '#1111');
    assert.equal(maskify('string qualquer'), '###########quer');
  });
});