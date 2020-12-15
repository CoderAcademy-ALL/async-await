function greeter(name) {
    return `Hello ${name}`;
}

const greeting = greeter('John Cena');
console.log(greeting);

function promiseGreeter(name) {
    return new Promise((resolve, reject) => {
        resolve(`Hello ${name}`);
    })
}

const promisedGreeting = promiseGreeter('James Bond');
 promisedGreeting
    .then(greeting => console.log(greeting));

async function asyncGreeter(name) {
    return `Hello ${name}`;
}

async function theAnswer(){ 
    return 42 
}


const asyncGreeting = asyncGreeter("Elton John");
asyncGreeting.then(greeting => console.log(greeting));
    theAnswer()
        .then(answer => console.log("The ultimate answer is " + 42))