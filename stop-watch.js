let count = 0;
const countNumberTag = document.getElementById('countNumber');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function clock(){
    count++;
    countNumberTag.innerText = count;
}

let intervalId = null;
const startClock = () => {
    if(intervalId !== null){
        clearInterval(intervalId);
    }
    intervalId = setInterval(clock, 1000);
    stopBtn.disabled = false;
    resetBtn.disabled = false;
}

const stopClock = () =>{
    clearInterval(intervalId);
}

const resetClock = () => {
    clearInterval(intervalId);
    count = 0;
    countNumberTag.innerText = '0';
    stopBtn.disabled = true;
    resetBtn.disabled = true;
}

   



