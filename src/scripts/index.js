(function() {
    'use strict';

//не используется. на перспективу
    const msecInYear = 31536000000;
    let demandYear = 2018;
    const startOfYear = new Date(demandYear, 0, 1);
    const yearInput = document.querySelector('#demandYear');

        
// используется
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
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    // TODO: Memoize it
/*
Функция возвращает значение текущего года как строку вида ХХХХ.
Аргументы:
    нет
Вызываемые функции:
    только встроенные
*/
    // const getCurrentYear = () => {
    //     const dateNow = new Date();
    //     return dateNow.getFullYear();
    // };
    const getCurrentYear = dateModule.getCurrentYear;

/*
Функция возвращает количество дней в требуемом месяце. Функция находит последний день в месяце и возвращает дату встроенным методом getDate(). Поиск производится в цикле потем получения даты из значений года, месяца, дня и последующей проверки номера месяца полученного из даты и номера месяца переданного в конфиге. Пока номер месяца полученного путем вычисления new Date(...) больше переданного значения производится уменьшение значения lastDay. При невыполнении условия проверки цикл прекращается и возвращается значение даты полученное выполнением встроенного метода getDate() 
Аргументы:
    cfg - объект конфига. Содержит значения текущего года, номера месяца и дня. cfg.day имеет значение по умолчанию
Вызываемые функции:
    только встроенные методы
*/
    // const getNumberOfDays = (cfg) => {
    //     let lastDate;
    //     let i = 0;
    //     let lastDay = 31;
    //     do {
    //         lastDate = new Date(cfg.currentYear, cfg.monthNumber, cfg.day = lastDay);
    //         // console.log(new Date(cfg.currentYear, cfg.monthNumber, cfg.day = lastDay));
    //         lastDay--;
    //         i++;
    //     } while (lastDate.getMonth() > cfg.monthNumber && i < 10);
    //     console.log(Array.from({length: lastDate.getDate()}, (k, i) => i + 1));
    //     return lastDate.getDate();
    // };
    const getNumberOfDays = dateModule.getNumberOfDays;

/*
Функция возвращает массив дат (количество дней в требуемом месяце)
Аргументы:
    monthNumber - номер месяца (число)
    day - номер дня (число). Имеет значение по умолчанию
Вызываемые функции:
    getCurrentYear/-/ - функция возвращает значение текущего года как строку вида ХХХХ.
    getNumberOfDays/-/ - функция возвращает количество дней в требуемом месяце
*/
    // const getArrayOfDaysPerMonth = (monthNumber, day=1) => {
    //     const currentYear = getCurrentYear();
    //     // console.log(currentYear, monthNumber);
    //     // console.log(new Date(currentYear, monthNumber, day));
    //     const numberOfdays = getNumberOfDays({currentYear, monthNumber, day});
    //     return Array.from({length: numberOfdays}, (k, i) => i + 1);
    // };

    const getArrayOfDaysPerMonth = dateModule.getArrayOfDaysPerMonth;

/*
Функция реализовывает шаблон проектирования "синглтон (одиночка)". Функция возвращает объект с единственным методом getInstance, который принимает функцию результат работы которой нужно сделать единичным. Вызов функции, которая должна передаваться в качестве аргумента также должен выполняться единожды. Если функция (аргумент) не выполнялась, то производится вызов функции и результат ее работы записывается в переменную instance, доступную из амыкания, а затем возвращается как результат работы метода getInstance. Если же переменная instance уже хранит данные, то функция, переданная аргументом, не вызывается, а возвращается переменная instance.
!!! константа getSingleton - объект с методом getInstance
*/
    const getSingleton = dateModule.getSingleton;

/*
Функция строит сетку из дней недели для конкретного месяца. 
Аргументы:
    month - название месяца (строка)
Вызываемые функции:
    getArrayOfDaysPerMonth/-/ - возвращает массив дат (количество дней в требуемом месяце)
*/
    const buildDaysGrid = (month, nodeId) => {
        const numberOfMonth = monthsOfYear[month.toLowerCase()];
        const arrayOfDays = getArrayOfDaysPerMonth(numberOfMonth);
        // const currentYear = getCurrentYear();
        const body = document.querySelector('body');
        const monthItem = document.querySelector(`#${nodeId}`);
        const header = monthItem.querySelector('.month-item__header');
        const div = document.createElement('div');
        const daysNameBlock = document.createElement('div');

        // div.style = {'background': 'gray', 'width': '200px', 'height': '100px'};
        // div.style.background = '#111';
        // div.style.width = '20px';
        // div.style.height = '20px';
        div.className = 'month-item__days-grid-item';
        daysNameBlock.className = 'days-name';

        // body.appendChild(div);

        // const monthItem = document.querySelector('.month-item');
        const monthName = monthItem.querySelector('.month-item__month-name');
        const daysGrid = monthItem.querySelector('.month-item__days-grid');

        weekDays.forEach(item => {
            const clonedDaysNameBlock = daysNameBlock.cloneNode(false);
            clonedDaysNameBlock.innerHTML = item.slice(0, 3);
            header.appendChild(clonedDaysNameBlock);
        });

        console.log(month);
        monthName.innerHTML = month;
        arrayOfDays.forEach(el => {
            const clonedDiv = div.cloneNode(false);
            clonedDiv.innerHTML = el;
            daysGrid.appendChild(clonedDiv);
        });
    };

/*
Функция создает экземпляр блока месяца который содержит в себе заголовок для названия месяца и блок для сетки с днями.
Аргументы:
    нет
*/
//TODO Make singletone
    const createMonthItemInstance = () => {
        const monthItemContainer = document.createElement('section');
        const containerTitle = document.createElement('h2');
        const daysGridHeader = document.createElement('header');
        const daysGridContainer = document.createElement('div');
        monthItemContainer.className = 'month-item';
        containerTitle.className = 'month-item__month-name';
        daysGridHeader.className = 'month-item__header';
        daysGridContainer.className = 'month-item__days-grid';
        monthItemContainer.appendChild(containerTitle);
        monthItemContainer.appendChild(daysGridHeader);
        monthItemContainer.appendChild(daysGridContainer);
        return monthItemContainer;
    };

/*
Функция создает (клонированием существующего элемента, полученного из DOM) узлы для каждого элемента переданного в качестве аргумента (месяца в году). Каждому клонированному элементу добавляется атрибут id со значением получаемым конкатенацией строк названия месяца (передан как аргумент) и текущего года (получен из функции getCurrentYear). Может выглядеть как: october2018
Аргументы:
    monthsOfYear/-/ - объект, содержащий месяцы с их порядковыми номерами в качестве пар ключ - значение. Пока не используется
    current/-/ - строка - название месяца
Вызываемые функции:
    getCurrentYear/-/ - функция возвращает значение текущего года как строку вида ХХХХ
*/
    const buildMonthsGrid = (monthsOfYear, current) => {
        const calendarContainer = document.querySelector('.calendar-net');
        const monthItem = getSingleton.getInstance(createMonthItemInstance);
        const clonedMonthItem = monthItem.cloneNode(true);
        clonedMonthItem.id = `${current}${getCurrentYear()}`;
        console.log(clonedMonthItem);
        calendarContainer.appendChild(clonedMonthItem);
        buildDaysGrid(current, clonedMonthItem.id);
    };

// не используется. на перспективу
    const enterData = (e) => {
        if (e.keyCode === 13) {
            console.log(typeof e.target.value);
        }
    };

    yearInput.addEventListener('keypress', enterData);

// Временная функция запускает процесс подготовки данных и построения календарной сетки
/* Аргументы:
    monthsOfYear/-/ - объект, содержащий названия месяцев года в качестве ключей и номера месяцев в году как значения
Вызываемые функции:
    buildMonthsGrid/-/ - функция создает (клонированием существующего элемента) узлы для каждого элемента переданного в качестве аргумента (месяца в году). На текущий момент выводит в консоль созданные элементы.
*/
    (function checkAllMonths(monthsOfYear) {
        const monthsArray = Object.keys(monthsOfYear);
        monthsArray.forEach(month => buildMonthsGrid(monthsOfYear, month));
        // monthsArray.forEach(month => buildDaysGrid(month));
    }(monthsOfYear));
    // buildDaysGrid('april');
}());