function taskA() {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 5000);
        setTimeout(() => {
            resolve("Task A Complete");
        }, time);
    });
}

function taskB() {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 5000);
        setTimeout(() => {
            resolve("Task B Complete");
        }, time);
    });
}

function taskC() {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 5000);
        setTimeout(() => {
            resolve("Task C Complete");
        }, time);
    });
}


function findFirstCompletedTask() {
    Promise.race([taskA(), taskB(), taskC()]).then((value) => {
        console.log(value);

      });
}

findFirstCompletedTask();
 
// Math.random()/ 