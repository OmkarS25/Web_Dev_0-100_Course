// Assignments for this week:

// 1. Create a counter in JS (counts from 30-0)
function counter(){
    for(let i=30; i>=0; i--){
        process.stdout.write(i + " ");
    }
}

// 2. Calucate the time it takes between a setTimeout call and the inner function actually running
function setDiffrence(){
    // This is something like lamda of cpp.
    let start = new Date();
    setTimeout(() => {
        let end = new Date();
        console.log(end - start);
    })
}

// 3. Create a terminal clock(HH:MM:SS) that updates every second
function terminalClock(){
    setInterval(() => {
        let date = new Date();
        console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds());
    })
}

function main(){
    counter();
    setDiffrence();
    // terminalClock();
} main();