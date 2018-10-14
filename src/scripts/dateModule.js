'use strict';

const dateModule = function () {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    const getNumberOfDays = (cfg) => {
        let lastDate;
        let i = 0;
        let lastDay = 31;
        do {
            lastDate = new Date(cfg.currentYear, cfg.monthNumber, cfg.day = lastDay);
            lastDay--;
            i++;
        } while (lastDate.getMonth() > cfg.monthNumber && i < 10);
        // console.log(Array.from({length: lastDate.getDate()}, (k, i) => i + 1));
        return lastDate.getDate();
    };

    const getArrayOfDaysPerMonth = (monthNumber, day=1) => {
        const currentYear = getCurrentYear();
        const numberOfdays = getNumberOfDays({currentYear, monthNumber, day});
        return Array.from({length: numberOfdays}, (k, i) => i + 1);
    };

    const getSingleton = function () {
        let instance = null;
        function init(fn) {
            return fn();
        }
        return {
            getInstance: function (fn) {
                if (!instance) {
                    instance = init(fn);
                }
                return instance;
            }
        };
    }();

    return { 
        getCurrentYear: getCurrentYear,
        getNumberOfDays: getNumberOfDays,
        getArrayOfDaysPerMonth: getArrayOfDaysPerMonth,
        getSingleton: getSingleton
    };
}(); 

try {
    module.exports = dateModule;
} catch (e) {
    console.log('module is not defined');
}