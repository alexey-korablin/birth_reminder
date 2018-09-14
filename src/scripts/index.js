(function() {
    'use strict';

    const msecInYear = 31536000000;

    let demandYear = 2018;
    const monthsOfYear = {
        january: 0,
        february: 1,
        march: 2,
        april: 3,
        may: 4,
        june: 5,
        july: 6,
        august: 7,
        september: 8,
        october: 9,
        november: 10,
        december: 11
    };

    const startOfYear = new Date(demandYear, 0, 1);
    const yearInput = document.querySelector('#demandYear');

    // TODO: Memoize it
    const getCurrentYear = () => {
        const dateNow = new Date();
        return dateNow.getFullYear();
    };

    const getNumberOfDays = (cfg) => {
        let lastDate;
        let i = 0;
        let lastDay = 31;
        do {
            lastDate = new Date(cfg.currentYear, cfg.monthNumber, cfg.day = lastDay);
            // console.log(new Date(cfg.currentYear, cfg.monthNumber, cfg.day = lastDay));
            lastDay--;
            i++;
        } while (lastDate.getMonth() > cfg.monthNumber && i < 10);
        console.log(Array.from({length: lastDate.getDate()}, (k, i) => i + 1));
        return lastDate.getDate();
    };

    const getArrayOfDaysPerMonth = (monthNumber, day=1) => {
        const currentYear = getCurrentYear();
        // console.log(currentYear, monthNumber);
        // console.log(new Date(currentYear, monthNumber, day));
        const numberOfdays = getNumberOfDays({currentYear, monthNumber, day});
        return Array.from({length: numberOfdays}, (k, i) => i + 1);
    };

    const buildDaysGrid = (month) => {
        const numberOfMonth = monthsOfYear[month.toLowerCase()];
        const arrayOfDays = getArrayOfDaysPerMonth(numberOfMonth);
        // const currentYear = getCurrentYear();
        const body = document.querySelector('body');
        const div = document.createElement('div');

        // div.style = {'background': 'gray', 'width': '200px', 'height': '100px'};
        // div.style.background = '#111';
        // div.style.width = '20px';
        // div.style.height = '20px';
        div.className = 'month-item__days-grid-item';

        body.appendChild(div);

        const monthItem = document.querySelector('.month-item');
        const monthName = document.querySelector('.month-item__month-name');
        const daysGrid = document.querySelector('.month-item__days-grid');

        console.log(month);
        monthName.innerHTML = month;
        arrayOfDays.forEach(el => {
            const clonedDiv = div.cloneNode(false);
            clonedDiv.innerHTML = el;
            daysGrid.appendChild(clonedDiv);
        });
    };

    const buildMonthsGrid = (monthsOfYear, current) => {
        const monthItem = document.querySelector('.month-item');
        const body = document.querySelector('body');
        const clonedMonthItem = monthItem.cloneNode(true);
        clonedMonthItem.id = `${current}${getCurrentYear()}`;
        console.log(clonedMonthItem);
    };

    const enterData = (e) => {
        if (e.keyCode === 13) {
            console.log(typeof e.target.value);
        }
    };

    yearInput.addEventListener('keypress', enterData);

    (function checkAllMonths(monthsOfYear) {
        const monthsArray = Object.keys(monthsOfYear);
        monthsArray.forEach(month => buildMonthsGrid(monthsOfYear, month));
    }(monthsOfYear));
    // buildDaysGrid('april');
}());