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
const initMinut = 59;
const initHour = 24;
let limit = 24;

const newCount = new Panel(initHour, initMinut, initSecond);

renderCounter(hours, minuts, seconds, newCount);

const convertNumber = (param) => param = Number(param);

const resetSecondsEndDisagrees = (param) => {
    if(!param) {
        seconds.textContent = initSecond;
        minuts.textContent--;
     }
}

const resetMinutsEndDisagrees = (param) => {
    if(!param) {
        minuts.textContent = initSecond;
        hours.textContent--;
        limit--;
     }
}

const resetCount = (hours, minuts, seconds) => {
    if(!hours) {
        hours.textContent = 0;
        minuts.textContent = 0;
        seconds.textContent = 0;
    }
}

const controllerCount = () => {
    seconds.textContent--; 
    setTimeout(() => {
        if(limit) {
            controllerCount();
        }
        resetSecondsEndDisagrees(convertNumber(seconds.textContent));
        resetMinutsEndDisagrees(convertNumber(minuts.textContent));
        resetCount(hours, minuts, seconds);
    }, 1000);
}

controllerCount();   




