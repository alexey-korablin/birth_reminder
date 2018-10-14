'use strict';
const assert = require('chai').assert;
const dateModule = require('../src/scripts/dateModule');

const getClass = (arg) => ({}).toString.call(arg).slice(8, -1);

describe('dateModule', () => {
    it('dateModule is defined', () => {
        assert(dateModule, 'dateModule has been defined');
    });
    it('dateModule is object', () => {
        assert.isObject(dateModule, 'dateModule is object');
    });
    it('dateModule has getCurrentYear method', () => {
        assert.isFunction(dateModule.getCurrentYear, '#getCurrentYear is function');
    });

    describe('#getCurrentYear', () => {
        const getCurrentYear = dateModule.getCurrentYear;

        it('returns current year', () => {
            const expectedValue = new Date().getFullYear();
            assert.equal(getCurrentYear(), expectedValue, `current year is ${expectedValue}`);
        });
        it('return current year as a number', () => {
            assert.isNumber(getCurrentYear(), 'result is a number');
        });
    });

    it('dateModule has getNumberOfDays method', () => {
        assert.isFunction(dateModule.getNumberOfDays, '#getNumberOfDays is function');
    });

    describe('#getNumberOfDays', () => {
        const getNumberOfDays = dateModule.getNumberOfDays;
        const year = new Date().getFullYear();
        const cfgLongMonth = { currentYear: year, monthNumber: 0, day: 31 };
        const cfgShortMonth = { currentYear: year, monthNumber: 3, day: 31 };
        const cfgShortestMonth = { currentYear: year, monthNumber: 1, day: 31 };

        it('returned data type is number', () => {
            assert.isNumber(getNumberOfDays(cfgLongMonth), '#getNumberOfDays returns number');
        });
        it('returns number of days by particular month', () => {
            [
                [cfgLongMonth, 31, 'January has 31 days'],
                [cfgShortMonth, 30, 'April has 30 days'],
                [cfgShortestMonth, 28, 'February has 28 days']
            ].forEach((cfg) => {
                assert.equal(getNumberOfDays(cfg[0]), cfg[1], cfg[2]);
            });
        });
    });

    it('dateModule has getArrayOfDaysPerMonth method', () => {
        assert.isFunction(dateModule.getArrayOfDaysPerMonth, '#getArrayOfDaysPerMonth is function');
    });

    describe('#getArrayOfDaysPerMonth', () => {
        const getArrayOfDaysPerMonth = dateModule.getArrayOfDaysPerMonth;

        it('should return an array', () => {
            assert.isArray(getArrayOfDaysPerMonth(Math.floor(Math.random() * 12)), 'getArrayOfDaysPerMonth returns an array');
        });
        it('should return array of numbers', () => {
            const result = getArrayOfDaysPerMonth(Math.floor(Math.random() * 12));
            result.forEach(el => {
                assert.isNumber(el, 'each element of the resulted array is a number');
            });
        });
    });

    it('dateModule has getSingleton object', () => {
        assert.isTrue(getClass(dateModule.getSingleton) === 'Object', 'getSingleton is an object');
    });

    describe('getSingleton', () => {
        const getSingleton = dateModule.getSingleton;

        it('has property getInstance', () => {
            assert.exists(getSingleton.getInstance, '#getInstance exists');
        });
        it('#getInstance should be a function', () => {
            assert.isFunction(getSingleton.getInstance, '#getInstance is a function');
        });
    });
});