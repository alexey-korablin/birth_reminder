'use strict';
const assert = require('chai').assert;

describe('Just text', () => {
    const isTrue = true;
    it('The test in describe', () => {
        assert.equal(isTrue, true);
    });

    it('Another test', () => {
        assert.equal(!isTrue, false);
    });
});
