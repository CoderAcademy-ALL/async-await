function rememberName(input) { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(input)
        },1000)
    })
}

function rememberPlace(name) {
    const locations = {
        Clare: "Melbourne",
        Nicole: "Fitzroy North", 
        Andrew: "Caufield",
        Anna: "Malvern",
        Rory: "Rosebud"
    }

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (locations[name]) {
                resolve(locations[name])
            }
            reject("Sorry, I don't know where you live")
        }, 1000)
    })
}

// function rememberThenGreet(input) {
//     console.log("Oh hey...")
//     return rememberName(input)
//         .then(name => {
//             console.log(`${name} how are you?`)
//             return rememberPlace(name)
//                 .then(place => {
//                     return `... how's the weather in ${place}`
//                 })
//         })
//     }

async function asyncGreeter(input) {
    console.log("oh hey...")
    const name = await rememberName(input);
    const place = await rememberPlace(name)
    return `... ${name} how's the weather in ${place}`
}

// rememberThenGreet("Chris")
//             .then(greeting => console.log(greeting))
//             .catch(error => console.log(error))


asyncGreeter("Nicole")
    .then(smallTalk => console.log(smallTalk))
    .catch(error => console.log(error))           
