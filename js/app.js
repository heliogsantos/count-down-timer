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

const initSecond = 5;
const initMinut = 2;
const initHour = 2;
let limit = 2;

const newCount = new Panel(initHour, initMinut, initSecond);

renderCounter(hours, minuts, seconds, newCount);

const controllerCount = () => {
    seconds.textContent--; 
    setTimeout(() => {
        if(limit) {
            controllerCount();
        }

        if(seconds.textContent === '0') {
           seconds.textContent = initSecond;
           minuts.textContent--;
        }
        if(minuts.textContent === '0') {
            minuts.textContent = initMinut;
            hours.textContent--;
            limit--;
        }
        if(hours.textContent === '0') {
            seconds.textContent = 0;
            minuts.textContent = 0;
            hours.textContent = 0;
        }
        
    }, 1000);
}

controllerCount();   




