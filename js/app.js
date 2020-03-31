function Panel(hours, minuts, seconds) {
    this.hours = hours;
    this.minuts = minuts;
    this.seconds = seconds;
}

const view = {
    hours: document.querySelector('.hours p'),
    minuts: document.querySelector('.minuts p'),
    seconds: document.querySelector('.seconds p')
}

const { hours, minuts, seconds } = view;

const renderCounter = (hour, minut, second, { hours, minuts, seconds } = obj) => {
    hour.textContent = hours;
    minut.textContent = minuts;
    second.textContent = seconds;
}

const initSecond = 60;
const initMinut = 60;
const initHour = 24;
let limit = 24;

const newCount = new Panel(initHour, initMinut, initSecond);

renderCounter(hours, minuts, seconds, newCount);

const second = () => {
    seconds.textContent--; 
    setTimeout(() => {
        if(limit) {
            second(seconds);
        }
        if(seconds.textContent === '0') {
           seconds.textContent = initSecond;
           minuts.textContent--;
        }
        if(minuts.textContent === '0') {
            minuts.textContent = initMinut;
            hours.textContent--;
            limit--
        }
        if(hours.textContent === '0') {
            seconds.textContent = 0;
            minuts.textContent = 0;
            hours.textContent = 0;
        }
    }, 1000);
}

second();   




