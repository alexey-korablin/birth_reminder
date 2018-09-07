(function() {
    'use strict';

    const msecInYear = 31536000000;

    let demandYear = 2018;

    const startOfYear = new Date(demandYear, 0, 1);
    const yearInput = document.querySelector('#demandYear');

    const enterData = (e) => {
        if (e.keyCode === 13) {
            console.log(typeof e.target.value);
        }
    }

    yearInput.addEventListener('keypress', enterData);

    console.log(new Date(demandYear, 0, 1));
}());